'use client'

import Link from 'next/link';
import 'katex/dist/katex.css';
import { BlockMath, InlineMath } from 'react-katex';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function DPBlog() {
  return (
    <>
      <div className="cat-container">
        <div className="cat"></div>
      </div>

      <main className="flex-grow max-w-[888px] p-8 mx-auto lg:pt-12 text-base">
        <Link href="/" className="text-blue-600 hover:underline mb-6 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-4xl mb-6 font-bold">Dynamic Programming: Recursion ✚ Caching</h1>

        {/** INTRO **/}
        <section className="mb-8">
          <p className="mb-4">
            At its heart <strong>Dynamic Programming (DP)</strong> is an optimisation technique that relies on a very simple observation:
            if a function <em>f</em> calls itself repeatedly with the same arguments, we can store the first answer and re-use it instead of recomputing.
            The practice of remembering those previous answers is called <em>memoisation</em>.  Thus
            
            <span className="font-mono">DP&nbsp;=&nbsp;Recursion&nbsp;+&nbsp;Caching</span>.
          </p>

          <p className="mb-4">
            A top-down (recursive) formulation forces us to write the mathematical recurrence first and worry about implementation details later.
            In competitive programming and technical interviews this pays off: you get a correct exponential algorithm on paper, then add a cache and instantly obtain polynomial performance.
          </p>
        </section>

        {/** KNAPSACK **/}
        <section className="mb-8">
          <h2 className="text-2xl mb-4 font-semibold">Case Study — 0/1 Knapsack</h2>

          <p className="mb-4">
            Consider the classic <em>0/1 Knapsack</em> problem: given <code>n</code> items with weights
            <code>w[i]</code> and values <code>v[i]</code>, and a knapsack with capacity <code>W</code>, pick a
            subset of items that maximises total value without exceeding the capacity. If we write the
            brute-force recursion first, the state is simply "which index am I at and how much weight
            remains?":
          </p>

          <div className="rounded mb-4 overflow-auto">
            <SyntaxHighlighter language="python" style={oneDark}>
{`def best(i, remaining):
    # base cases
    if i == n or remaining == 0:
        return 0

    # choice: skip the item
    skip = best(i + 1, remaining)

    # choice: take the item (if it fits)
    take = 0
    if w[i] <= remaining:
        take = v[i] + best(i + 1, remaining - w[i])

    return max(skip, take)`}
            </SyntaxHighlighter>
          </div>

          <p className="mb-4">
            The above explores <code>2^n</code> possibilities. To turn it into DP we drop in a cache. In
            Python, the cache is a dictionary with tuple keys <code>dp[(i, remaining)]</code>. Notice how pleasant the
            syntax becomes: we use the same line to store and return the result.
          </p>

          <div className="rounded mb-4 overflow-auto">
            <SyntaxHighlighter language="python" style={oneDark}>
{`# Use a dictionary for memoization (key: (i, remaining))
dp = {}

def best(i, remaining):
    if i == n or remaining == 0:
        return 0
    
    # Check if we've already solved this subproblem
    if (i, remaining) in dp:  # 💾 cached!
        return dp[(i, remaining)]

    skip = best(i + 1, remaining)
    take = 0
    if w[i] <= remaining:
        take = v[i] + best(i + 1, remaining - w[i])

    # Store result in cache before returning
    dp[(i, remaining)] = max(skip, take)
    return dp[(i, remaining)]  # ← caching happens just before return`}
            </SyntaxHighlighter>
          </div>

          <p className="mb-4">
            That single assignment <code>dp[(i, remaining)] = …</code> is the only extra line we needed to
            convert an exponential search into <code>O(n·W)</code> time.  The top-down memoised version is almost a one-to-one translation of the mathematical recurrence, making the reasoning behind every line explicit.
          </p>
        </section>

        {/** VISUAL **/}
        <section className="mb-8">
          <h2 className="text-2xl mb-4 font-semibold">Visualising the State Space</h2>
          <p className="mb-4">
            A helpful mental model is to picture the cache as a table. For knapsack, the rows are item
            indices and the columns are remaining capacity:
          </p>

          <pre className="bg-gray-800 text-gray-100 p-4 rounded mb-4 text-sm">
{`       remaining → 0 1 2 … W
item ↓
 0             ▢ ▢ ▢   ▢
 1             ▢ ▢ ▢   ▢
 …             … … …   …
 n-1           ▢ ▢ ▢   ▢`}
          </pre>

          <p className="mb-4">
            The first time the recursion visits a cell, we colour it in. Subsequent visits simply read
            the stored value, pruning the recursion tree.
          </p>
        </section>

        {/** EDIT DISTANCE **/}
        <section className="mb-8">
          <h2 className="text-2xl mb-4 font-semibold">Problem&nbsp;2 — Minimum Edit Distance</h2>

          <p className="mb-4">
            Let <code>E(i, j)</code> denote the minimum number of single-character operations required to convert the
            first <code>i</code> characters of string <em>s</em> into the first <code>j</code> characters of string <em>t</em>.
            The classical Levenshtein recurrence is:
          </p>

          <div className="bg-gray-800 text-gray-100 p-4 rounded mb-4 overflow-auto">
            <BlockMath math={`
E(i,j) = \\begin{cases}
  0 & i = j = 0 \\\\
  i & j = 0 \\\\
  j & i = 0 \\\\
  \\min\\{ 
       E(i-1,j) + 1,            \\;  \\text{(deletion)} \\\\
       E(i,j-1) + 1,            \\;  \\text{(insertion)} \\\\
       E(i-1,j-1) + \\mathbf{1}_{s_i \\ne t_j}  \\text{(substitution / match)}
  \\}
\\end{cases}
            `} />
          </div>

          <p className="mb-4">
            Notice the state is bounded by the string lengths: <code>0 ≤ i ≤ |s|</code> and <code>0 ≤ j ≤ |t|</code>.
            Hence a <code>dp</code> table of size <code>(|s|+1)×(|t|+1)</code> suffices to cache every sub-problem.
          </p>

          <div className="rounded mb-4 overflow-auto">
            <SyntaxHighlighter language="python" style={oneDark}>
{`# Use a dictionary for memoization (key: (i, j))
dp = {}

def edit(i, j):
    # Base cases
    if i == 0:
        return j
    if j == 0:
        return i
    
    # Check if we've already solved this subproblem
    if (i, j) in dp:
        return dp[(i, j)]

    # If characters match, no substitution needed
    if s[i - 1] == t[j - 1]:
        dp[(i, j)] = edit(i - 1, j - 1)  # no cost when chars equal
        return dp[(i, j)]

    # Try all three operations and take minimum
    insert = 1 + edit(i, j - 1)      # Insert operation
    delete = 1 + edit(i - 1, j)      # Delete operation
    replace = 1 + edit(i - 1, j - 1) # Replace operation

    dp[(i, j)] = min(insert, delete, replace)
    return dp[(i, j)]`}
            </SyntaxHighlighter>
          </div>

          <p className="mb-4">
            The recursive shape mirrors the case analysis in the mathematical definition.  Caching transforms the naive
            <InlineMath math={`O(3^{m+n})`} /> tree into <InlineMath math={`O(m \\cdot n)`} /> time.
          </p>
        </section>

        {/** LIS **/}
        <section className="mb-8">
          <h2 className="text-2xl mb-4 font-semibold">Problem&nbsp;3 — Longest Increasing Subsequence (LIS)</h2>

          <p className="mb-4">
            A straightforward recursive view picks two parameters:
            the current index <code>i</code> and the index <code>p</code> of the previous element chosen for the subsequence (or <code>−1</code> if none).
            Let <code>L(i, p)</code> be the length of the longest increasing subsequence we can obtain from suffix <code>i</code>, given that the last selected element is at <code>p</code>.
          </p>

          <div className="bg-gray-800 text-gray-100 p-4 rounded mb-4 overflow-auto">
            <BlockMath math={`
L(i,p) = \\begin{cases}
  0 & i = n\\\\
  \\max\\big( L(i+1, p), \\, 1+L(i+1,i) \\big) & (p=-1)\\,\\lor\\,(a_i>a_p)\\\\
  L(i+1, p) & \\text{otherwise}
\\end{cases}
            `} />
          </div>

          <p className="mb-4">
            The state space is bounded: <code>0 ≤ i &lt; n</code> and <code>−1 ≤ p &lt; n</code>.  In code we store <code>p</code>
            as <code>p + 1</code> so that <code>−1</code> maps to <code>0</code>, yielding a <code>dp[n][n+1]</code> array.
          </p>

          <div className="rounded mb-4 overflow-auto">
            <SyntaxHighlighter language="python" style={oneDark}>
{`# Use a dictionary for memoization (key: (i, p))
# p == -1 is represented directly, no need for shifting
dp = {}

def lis(i, p):
    if i == n:
        return 0
    
    # Check if we've already solved this subproblem
    if (i, p) in dp:
        return dp[(i, p)]

    skip = lis(i + 1, p)
    take = 0
    if p == -1 or a[i] > a[p]:
        take = 1 + lis(i + 1, i)

    # The advantage of using a dictionary is we can directly store p=-1
    # without any shifting tricks needed in array implementations
    dp[(i, p)] = max(skip, take)
    return dp[(i, p)]`}
            </SyntaxHighlighter>
          </div>

          <p className="mb-4">
            This memoised version runs in <code>O(n²)</code>.  Once the recurrence is clear, one can derive the well-known <code>O(n&nbsp;log&nbsp;n)</code> patience-sorting solution, but the recursive formulation is often far easier to explain under interview pressure.
          </p>
        </section>

        {/** STATE LIMITS **/}
        <section className="mb-8">
          <h2 className="text-2xl mb-4 font-semibold">Choosing a Good State</h2>

          <p className="mb-4">
            The only hard rule of memoization is that the state must be <em>hashable</em>. In code we
            usually enforce that by making the state an index or tuple of indices so it fits nicely
            into an array (<code>dp[i][j]</code>) or a map (<code>Map&lt;Key, Value&gt;</code>). If your
            recursion needs information that can't be encoded into a finite key, memoization won't
            work and you need a different approach.
          </p>

          <p className="mb-4 italic">
            Tip: When you are stuck, write the parameters your recursive function needs. If there are
            only 2-3 reasonably bounded integers, chances are the problem is DP-friendly!
          </p>
        </section>

        {/** COMPLEXITY ANALYSIS **/}
        <section className="mb-8">
          <h2 className="text-2xl mb-4 font-semibold">How to Estimate Running Time</h2>

          <p className="mb-4">
            Once the state is fixed, the time complexity of a memoised (top-down) or tabulated (bottom-up) DP can be
            described in one line:
          </p>

          <div className="bg-gray-800 text-gray-100 p-4 rounded mb-4 text-sm overflow-auto font-mono">
            time = (# unique states) × (time to solve one state)
          </div>

          <p className="mb-4">
            • <strong>Cost per state.</strong> In most classical problems the work done inside a function call is a small constant: a handful of arithmetic operations plus the evaluation of &ldquo;children&rdquo; states.  If there is an inner loop over
            <em>k</em> options (e.g.&nbsp;knapsack iterates over two choices, coin-change iterates over all coin values) the factor becomes <span className="font-mono">k</span>.
          </p>

          <p className="mb-4">
            • <strong>Number of states.</strong> This is purely combinatorial and depends only on how many distinct pairs /triples/&hellip; of indices the state parameters can take.  For example:
          </p>

          <ul className="list-disc list-inside mb-4">
            <li>Knapsack has <code>n × (W+1)</code> states because <code>i∈[0,n)</code> and <code>remaining∈[0,W]</code>.</li>
            <li>Edit distance has <code>(|s|+1) × (|t|+1)</code> states.</li>
            <li>LIS has <code>n × (n+1)</code> states after the <code>p+1</code> shift trick.</li>
          </ul>

          <p className="mb-4">
            Multiplying those two factors immediately yields the asymptotic time.  The same reasoning applies to bottom-up tables: we still fill each entry exactly once.
          </p>

          <p className="mb-4 italic">
            The beauty of DP is that complexity analysis reduces to simple counting—not amortised analysis, not probability, just counting indices.
          </p>
        </section>

        {/** CONCLUSION **/}
        <section className="mb-8">
          <h2 className="text-2xl mb-4 font-semibold">Takeaways</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Start with the naive recursion—then memoize.</li>
            <li>Array or map caching turns exponential trees into polynomial tables.</li>
            <li>Top-down solutions mirror the mathematical recurrence, so they're fast to write under pressure.</li>
          </ul>
        </section>
      </main>
    </>
  );
}
