const { Octokit } = require("@octokit/rest");
require('dotenv').config()

const fs = require('fs')
const path = require('path')


if(!process.env.GH_ACCESS_TOKEN){
    console.log("Need GH_ACCESS_TOKEN in .env")
}

const octokit = new Octokit({
    auth: process.env.GH_ACCESS_TOKEN,
})

const validYears = ['2021', '2020']

async function getCommits(){
    let pageIndex = 1;
    let repeatError = false;
    let commits = []
    while(true){
        try{
            const pageList = await getPage(pageIndex);
            for(const item of pageList){
                commits.push({
                    url: item.url,
                    date: item.commit.committer.date,
                    repo_owner: item.repository.owner.login,
                    private: item.repository.private,
                    repo_name: item.repository.name,
                })
            }
            repeatError = false;
            
            let last = commits[commits.length-1];

            if(pageIndex==10){
                console.log("Got list of commits")
                fs.writeFileSync("githubStats.json", JSON.stringify(commits))
                return commits;
            }

        }catch(err){
            console.error(err)
            if(repeatError)
                break;
            else
                repeatError = true
                continue;
        }

        pageIndex++;
    }

}


function getDay(date){
    return date.split("T")[0]
}

const extMapping = {
    '.py': "Python",

    '.js': "Javascript",
    '.pug': "Javascript",
    '.ts': "Javascript",
  
  
    '.md': "Markdown",
  
    '.html': "HTML/CSS",
  
    '.css': "HTML/CSS",
    '.scss': "HTML/CSS",
  
    '.txt': "Data",
    '.json': "Data",
    '.csv': "Data",
    '.yaml': "Data",
    '.dat': "Data",
  
    '.cpp': "C++",
    '.hpp': "C++",
    '.h': "C++",
    '.cmake': "C++",
    '.c': "C++",
  
}

module.exports.getDiffsByDay = async function(fetchCommits){
    // let commit_list = await getCommits();
    let commit_list = JSON.parse(fs.readFileSync("githubStats.json"))
    if(fetchCommits){
        for(let index in commit_list){
            commit_list[index].diffs = await getCommitDiffs(commit_list[index].url)        
        }
        fs.writeFileSync("githubStatsWithDiffs.json", JSON.stringify(commit_list))
    }
    else{
        commit_list = JSON.parse(fs.readFileSync("githubStatsWithDiffs.json"))
    }

    let sum_diffs = {}
    for(const {diffs} of commit_list){
        for(const ext in diffs){
            sum_diffs[ext] = (sum_diffs[ext]||0)+diffs[ext]
        }
    }

    // Sort dates ascending
    commit_list.sort(function(a, b) {
        const keyA = new Date(a.date),
          keyB = new Date(b.date);
        // Compare the 2 dates
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
    });

    let commitsByDay = []
    let dayLen = 0;
    let index = 0;
    while(index<commit_list.length){
        const cur = commit_list[index]
        if(dayLen==0){
            commitsByDay.push({
                day:getDay(cur.date),
                diffs: cur.diffs
            })
            dayLen++;
        }
        else{
            const last = commitsByDay[dayLen-1];
            if(last.day == getDay(cur.date)){
                for(const key in cur.diffs){
                    commitsByDay[dayLen-1].diffs[key] = (commitsByDay[dayLen-1].diffs[key]||0) + cur.diffs[key]
                }
            }
            else{
                commitsByDay.push({
                    day:getDay(cur.date),
                    diffs: cur.diffs
                })
                dayLen++;
            }
        }
        index++;
    }

    for(let index in commitsByDay){
        const diffs = commitsByDay[index].diffs;
        const new_diff = {}
        for(const key in diffs){
            if(extMapping[key]){
                new_diff[extMapping[key]] = (new_diff[extMapping[key]]||0)+diffs[key]
            }
        }
        commitsByDay[index].diffs = new_diff
    }

    console.log(commitsByDay)

    return commitsByDay
}

async function getCommitDiffs(url){
    if(waitUntil && Date.now()<waitUntil){
        const diff = waitUntil - Date.now();
        if(diff>0){
            console.log("Waiting for",diff,"ms")
            await delay(diff+1)
        }
        if(Date.now()<waitUntil){
            throw "Didn't wait long enough rippppp"
        }
    }

    const req = await octokit.request(`GET ${url}`)
    const diffs = {}
    for(const file of req.data.files){
        if(file.status!='modified'){
            continue;
        }
        if(file.additions==0){
            continue;
        }
        const ext = path.extname(file.filename)
        diffs[ext] = (diffs[ext]||0) + file.additions
    }
    
    if(req.headers['x-ratelimit-remaining']=='0'){
        console.log("Rate limit reach waiting")
        waitUntil = parseInt(req.headers['x-ratelimit-reset'],10)
    }
    console.log("rate limit remaining", req.headers['x-ratelimit-remaining'])

    return diffs
}


var waitUntil = null;
const delay = ms => new Promise(res => setTimeout(res, ms));

async function getPage(num){
    if(waitUntil && Date.now()<waitUntil){
        const diff = waitUntil - Date.now();
        if(diff>0){
            console.log("Waiting for",diff,"ms")
            await delay(diff+1)
        }
        if(Date.now()<waitUntil){
            throw "Didn't wait long enough rippppp"
        }
    }
    const req = await octokit.request('GET /search/commits', {
        q: `author:AnirudhRahul`,
        sort: 'committer-date',
        order: 'desc',
        per_page: 100,
        page: num,
        mediaType: {
            previews: [
              'cloak'
            ]
        }
    })
    if(req.headers['x-ratelimit-remaining']=='0'){
        console.log("Rate limit reach waiting")
        waitUntil = parseInt(req.headers['x-ratelimit-reset'],10)
    }
    console.log("rate limit remaining", req.headers['x-ratelimit-remaining'])
    return req.data.items
}




if (require.main === module) {
    module.exports.getDiffsByDay(true)
    .catch(console.error)
}