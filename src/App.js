import './App.scss';
import {
	Footer,
	Header,
} from './Components';

function App() {
	return (
		<div className="app">
			<Header />
			<div className="content">
				<h2>Introducton</h2>
				<p>This is my pre-interview task. A web page which, along with my presentation,  explains why I would be a good choice to help the language centre incorporate AI into their learning resources.</p>
				<ul>
					<li>I used &lt;meta charset="utf-8" /&gt; as the work is for the language department, so I want to facilitate use of
						foreign languages and their associated character sets. UTF-8 文字を表示する簡単なテスト</li>
					<li>I decided to demonstrate my React experience by making this a React App, although it doesn't need to be to meet
						the requirements. It also has the advantages of a nice developer experience as edits are reflected immediately in the browser.
						Also SASS support since CSS does not yet have standard, cross-browser mixin functionality. Otherwise I'd have been tempted to
						try out standard CSS as an exercise.</li>
					<li>The page is responsive, using "T-shirt sizes" as I read a time ago that it's not a good idea to chase actual device dimensions.
						I created a neat but simple debugging tool too.</li>
					<li>Exercise extreme caution when choosing to incorporate AI as the output could be unreliable or misleading and damage
						the reputation of the department and the university (see below).</li>
				</ul>
				<h2>Research</h2>
				<ul>
					<li>This very <a href='https://www.bbc.co.uk/news/business-65849104' target='_blank' title='BBC article' rel="noreferrer">helpful BBC article</a>&nbsp;
							talks about the benefits of AI for studying language and for live translation:
						<ul>
							<li>Regarding <i>Replika</i> it quotes "But the conversations could become repetitive, language corrections were missing,
								and the chatbot would sometimes ask students for sexy pictures. 'This was quite abusive.'"</li>
							<li><i>LangAI</i> "the new wave of generative AI is so advanced that it can cultivate AI penpals". Rather than sticking to
								boring pre-scripted	roleplays, with current AI "you can speak about things that are interesting to you,
								which makes it feel like not as much of a chore to learn". LangAI is an app, powered by ChatGPT, see below.</li>
							<li>"Even in common languages, the chatbots make errors - sometimes even inventing words. One problem is that they deliver text so confidently, it would be easy for a relatively new learner to take what they say as correct.

								"</li>
							<li>"What kind of biases and inappropriate ways of talking about other people might they be learning from the chatbot?"</li>
						</ul>
					</li>
					<li>OpenAI, the makers of ChatGPT are <a href='https://openai.com/chatgpt/education/' target='_blank' rel="noreferrer">already working with University
							of Oxford</a>. <a href='https://openai.com/safety/' target='_blank' rel="noreferrer">They also seem to be committed to safety</a>.</li>
					<li>An <a href='https://ptolemay.medium.com/integrating-chatgpt-in-language-learning-app-unlocking-potential-with-linguabot-53b8f48b6789' target='_blank' rel="noreferrer">
							Interesting article</a> about integration with ChatGPT specifically for language learning.</li>
					<li>An <a href='https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2023.1131506/full' target='_blank' rel='noreferrer'>interesting
						research paper by Blanka Klímová</a>.</li>
					<li>A <a href='https://www.philosophy.ox.ac.uk/event/artificial-intelligence-world-languages' target='_blank' rel='noreferrer'>
						workshop from 'the competition'</a>.</li>
				</ul>
				<h2>Implementation</h2>
				<ul>
					<li>Of course if this were not a technical task for a job application, there would be further discussion and research.</li>
					<li>From what I have learned in this short time, I would probably recommend a feasibility study using <a href='https://openai.com/chatgpt/education/' target='_blank' rel='noreferrer'>ChatGPT 4o</a>:
						<ul>
							<li>Significantly higher message limits than the free version of ChatGPT</li>
							<li>Over 50 languages supported.</li>
						</ul>

						<iframe
							className='video'
							src="https://www.youtube.com/embed/bSvTVREwSNw?si=bpFke9hEb0revWOZ"
							title="How ChatGPT works - technically"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerPolicy="strict-origin-when-cross-origin"
							allowFullScreen>
						</iframe>
					</li>
					<li>A <a href='https://blog.pamelafox.org/2023/05/streaming-chatgpt-with-server-sent.html' target='_blank' rel="noreferrer">good example of implementing a ChatGPT interface using SSE</a>.</li>
					<li>Initially, perhaps a chatbot interface, though I have several questions to ask you about this.</li>
					<li>It could also be used for setting exam questions, as long as the output is vetted?</li>
				</ul>
				<iframe
					className='video'
					src="https://www.youtube.com/embed/7f2S0n5KPr0?si=TybSXcprM9J4JT3-"
					title="How ChatGPT works - architecture explained"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen>
				</iframe>
				<h2>Conclusion</h2>
				<ul>
					<li>I look forward to meeting you on Friday 7th February.</li>
					<li>I hope I can join you on your journey through AI!</li>
					<li>I have years of experience in web development, including integration of third party libraries and utilities,
						including Google maps, plotly.js, d3.js, various molecule editors, 3d molecule viewers etc. and I would be happy to
						demonstrate some of these.</li>
					<li>I enjoy finding ways to 'delight' the user, including animation and clear, intuitive user interfaces. I'd like to
						show some samples of my work and explain why it is rarely good to say "no" to your designer!</li>
					<li>I have experience of UX design and UX testing.</li>
					<li>I pioneered use of components at Jagex, or as I called them 'reusable elements', including a sampler page to pick from.</li>
					<li><a href='https://cv.bagnall.co.uk' target='_blank' rel='noreferrer'>My CV</a>.</li>
				</ul>
			</div>
			<Footer />
		</div>
	);
}

export default App;
