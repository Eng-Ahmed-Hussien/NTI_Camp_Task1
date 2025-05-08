const topics = [
  {
    title: "HTML Basics",
    description: "Master the structure of web pages using HTML elements, tags, and semantic layout.",
    linkText: "Learn HTML Basics",
    linkUrl: "html-basics",
    sessions: [
      "Introduction to HTML",
      "HTML Forms and Media",
      "Semantic HTML",
      "HTML Accessibility Best Practices",
      "HTML5 Features and APIs"
    ],
    keyDetails: {
      overview: "Learn to structure content semantically for accessibility and SEO. Covers core elements like `&lt;form&gt;`, `&lt;table&gt;`, and HTML5 features like `&lt;canvas&gt;`.",
      examples: [
        "Semantic page structure: `&lt;header&gt;`, `&lt;nav&gt;`, `&gt;main&lt;`, `&lt;article&gt;`, `&lt;footer&gt;`",
        "Form example: `&gt;input type='email' required&gt;` for validated email input",
        "Media embedding: `&lt;video controls&gt;&lt;source src='' type='video/mp4'&gt;&lt;/video&gt;`",
        "SVG graphics: `&lt;svg width='100' height='100'&gt;&lt;circle cx='50' cy='50' r='40' /&gt;&lt;/svg&gt;`"
      ],
      difficulty: "Beginner",
      duration: "6 hours",
      prerequisites: "None",
      resources: [
        { name: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { name: "W3Schools HTML Tutorial", url: "https://www.w3schools.com/html/" }
      ]
    }
  },
  {
    title: "CSS Styling & Layouts",
    description: "Style websites with CSS, using modern layout techniques and design fundamentals.",
    linkText: "Learn CSS Styling",
    linkUrl: "css-styling",
    sessions: [
      "Introduction to CSS",
      "CSS Box Model & Positioning",
      "CSS Flexbox",
      "CSS Grid",
      "CSS Transitions and Animations",
      "CSS Variables and Custom Properties"
    ],
    keyDetails: {
      overview: "Master responsive layouts with Flexbox/Grid. Learn specificity, pseudo-classes, and animations.",
      examples: [
        "Grid layout: `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))`",
        "Hover effect: `button:hover { transform: scale(1.1); }`",
        "CSS Variables: `--primary-color: #3490dc; color: var(--primary-color);`",
        "Animation: `@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }`"
      ],
      difficulty: "Intermediate",
      duration: "10 hours",
      prerequisites: "HTML Basics",
      resources: [
        { name: "CSS-Tricks", url: "https://css-tricks.com" },
        { name: "Flexbox Froggy", url: "https://flexboxfroggy.com" },
        { name: "Grid Garden", url: "https://cssgridgarden.com" }
      ]
    }
  },
  {
    title: "Responsive Design",
    description: "Create responsive websites that adapt to different screen sizes using media queries.",
    linkText: "Learn Responsive Design",
    linkUrl: "responsive",
    sessions: [
      "Responsive Design with Media Queries",
      "Mobile-First Design Principles",
      "Responsive Images and Media",
      "CSS Frameworks for Responsive Design",
      "Accessibility in Responsive Design",
      "Performance Optimization for Mobile"
    ],
    keyDetails: {
      overview: "Implement mobile-first workflows, fluid layouts, and responsive images with `srcset`.",
      examples: [
        "Media query: `@media (max-width: 768px) { ... }`",
        "Flexible images: `img { max-width: 100%; height: auto; }`",
        "Responsive typography: `font-size: clamp(1rem, 5vw, 2rem);`",
        "Picture element: `<picture><source media='(max-width: 800px)' srcset='small.jpg'></picture>`"
      ],
      difficulty: "Intermediate",
      duration: "8 hours",
      prerequisites: "CSS Styling",
      resources: [
        { name: "Responsive Web Design Fundamentals", url: "https://web.dev/responsive-web-design-basics" },
        { name: "Media Queries", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries" }
      ]
    }
  },
  {
    title: "JavaScript Essentials",
    description: "Add interactivity using core JavaScript concepts like DOM manipulation, events, and functions.",
    linkText: "Learn JavaScript Essentials",
    linkUrl: "javascript",
    sessions: [
      "Introduction to JavaScript",
      "JavaScript DOM Manipulation",
      "JavaScript Events & Functions",
      "JavaScript Arrays & Objects",
      "JavaScript ES6 Features and Syntax",
      "JavaScript Debugging and Error Handling",
      "JavaScript Promises and Async/Await"
    ],
    keyDetails: {
      overview: "Learn ES6+ features (arrow functions, destructuring), DOM manipulation, and async/await.",
      examples: [
        "DOM update: `document.getElementById('demo').innerHTML = 'Hello World!';`",
        "Fetch API: `fetch('url').then(response => response.json())`",
        "Destructuring: `const { name, age } = person;`",
        "Template literals: ``Hello ${name}, you are ${age} years old.``"
      ],
      difficulty: "Intermediate",
      duration: "15 hours",
      prerequisites: "HTML Basics",
      resources: [
        { name: "JavaScript.info", url: "https://javascript.info" },
        { name: "Eloquent JavaScript", url: "https://eloquentjavascript.net" },
        { name: "MDN JavaScript Guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" }
      ]
    }
  },
  {
    title: "Bootstrap Framework",
    description: "Use Bootstrap to build responsive, consistent, and attractive interfaces quickly.",
    linkText: "Learn Bootstrap",
    linkUrl: "bootstrap",
    sessions: [
      "Bootstrap Fundamentals",
      "Bootstrap Components and Customization",
      "Bootstrap Grid System",
      "Bootstrap Utilities and Helpers",
      "Bootstrap JavaScript Components",
      "Bootstrap Themes and Extensions"
    ],
    keyDetails: {
      overview: "Customize Bootstrap themes, use utility classes, and leverage JavaScript components.",
      examples: [
        "Grid column: `&lt;div class='col-md-6'&gt;`",
        "Modal component: `data-bs-toggle='modal'`",
        "Utility classes: `&lt;div class='d-flex justify-content-between align-items-center'&gt;&lt;/div&gt;`",
        "Custom theme: `$theme-colors: ('primary': #3490dc, 'danger': #e3342f);`"
      ],
      difficulty: "Beginner",
      duration: "7 hours",
      prerequisites: "CSS Styling",
      resources: [
        { name: "Bootstrap Documentation", url: "https://getbootstrap.com/docs" },
        { name: "Bootstrap Examples", url: "https://getbootstrap.com/docs/5.0/examples" }
      ]
    }
  },
  {
    title: "Portfolio Development",
    description: "Apply your skills in practical projects and build a professional portfolio.",
    linkText: "Build Your Portfolio",
    linkUrl: "portfolio",
    sessions: [
      "Project Planning and Design",
      "Building a Personal Portfolio Website",
      "Showcasing Projects and Skills",
      "Best Practices for Portfolio Development",
      "Preparing for Job Interviews",
      "Getting Feedback and Iterating"
    ],
    keyDetails: {
      overview: "Showcase projects with case studies, optimize for performance, and deploy.",
      examples: [
        "Project card: HTML/CSS cards with hover effects and GitHub links",
        "Deployment: Host on Netlify/GitHub Pages",
        "Analytics: `&lt;script async src='https://www.googletagmanager.com/gtag/js?id=G-1234'&gt; &lt;/script&gt;`",
        "Contact form: `&lt;form name='contact' method='POST' data-netlify='true'&gt;`"
      ],
      difficulty: "Advanced",
      duration: "20 hours",
      prerequisites: "All previous topics",
      resources: [
        { name: "GitHub Pages", url: "https://pages.github.com" },
        { name: "Netlify", url: "https://www.netlify.com" },
        { name: "Portfolio Examples", url: "https://www.awwwards.com/websites/portfolio" }
      ]
    }
  }
];

// Generate views
const views = {};

// Home view
views['home'] = () => `
      <h1 class="text-3xl font-bold text-center mb-8">Web Development Training Modules</h1>
      <div class="grid gap-6 sm:grid-cols-2">
        ${topics.map(topic => `
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition hover:-translate-y-1">
            <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-300 mb-2">${topic.title}</h2>
            <p class="text-gray-700 dark:text-gray-300 mb-4">${topic.description}</p>
            <div class="flex justify-between items-center">
              <span class="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">
                ${topic.keyDetails.difficulty}
              </span>
              <span class="text-gray-600 dark:text-gray-400 text-sm">${topic.keyDetails.duration}</span>
            </div>
            <a href="#${topic.linkUrl}" class="mt-4 inline-block text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
              → Learn ${topic.title}
            </a>
          </div>
        `).join('')}
      </div>
    `;

// Dynamically add detail views
topics.forEach(topic => {
  views[topic.linkUrl] = () => `
        <div class="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <div class="bg-gradient-to-r from-blue-600 to-indigo-700 py-6 px-8">
            <h1 class="text-3xl font-bold text-white mb-2">${topic.title}</h1>
            <p class="text-blue-100">${topic.description}</p>
          </div>
          
          <div class="px-8 py-6">
            <div class="flex flex-wrap gap-4 mb-6">
              <div class="bg-blue-50 dark:bg-gray-700 px-4 py-2 rounded-lg">
                <span class="text-sm text-gray-500 dark:text-gray-400">Difficulty</span>
                <p class="font-semibold text-blue-700 dark:text-blue-300">${topic.keyDetails.difficulty}</p>
              </div>
              <div class="bg-blue-50 dark:bg-gray-700 px-4 py-2 rounded-lg">
                <span class="text-sm text-gray-500 dark:text-gray-400">Duration</span>
                <p class="font-semibold text-blue-700 dark:text-blue-300">${topic.keyDetails.duration}</p>
              </div>
              <div class="bg-blue-50 dark:bg-gray-700 px-4 py-2 rounded-lg">
                <span class="text-sm text-gray-500 dark:text-gray-400">Prerequisites</span>
                <p class="font-semibold text-blue-700 dark:text-blue-300">${topic.keyDetails.prerequisites}</p>
              </div>
            </div>
            
            <div class="mb-6">
              <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Overview</h2>
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed">${topic.keyDetails.overview}</p>
            </div>
            
            <div class="mb-6">
              <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Sessions</h2>
              <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                ${topic.sessions.map(s => `<li>${s}</li>`).join('')}
              </ul>
            </div>
            
            <div class="mb-6">
              <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Code Examples</h2>
              <div class="space-y-4">
                ${topic.keyDetails.examples.map(ex => `
                  <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg overflow-hidden">
                    <div class="flex items-center bg-gray-800 dark:bg-gray-900 px-4 py-2 text-xs text-gray-200">
                      <div class="flex items-center space-x-1">
                        <span class="w-3 h-3 rounded-full bg-red-500"></span>
                        <span class="w-3 h-3 rounded-full bg-yellow-500"></span>
                        <span class="w-3 h-3 rounded-full bg-green-500"></span>
                      </div>
                      <span class="ml-4">code</span>
                    </div>
                    <pre class="p-4 text-sm text-gray-100 overflow-x-auto font-mono">${ex}</pre>
                  </div>
                `).join('')}
              </div>
            </div>
            
            ${topic.keyDetails.resources ? `
            <div class="mb-6">
              <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Resources</h2>
              <ul class="space-y-2">
                ${topic.keyDetails.resources.map(resource => `
                  <li>
                    <a href="${resource.url}" target="_blank" rel="noopener" 
                       class="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                      <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                      </svg>
                      ${resource.name}
                    </a>
                  </li>
                `).join('')}
              </ul>
            </div>
            ` : ''}
            
            <div class="mt-8 mb-4">
              <a href="#home" class="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                Back to Home
              </a>
            </div>
          </div>
        </div>
      `;
});

// Router
function router() {
  const hash = window.location.hash.substring(1);
  const route = hash || 'home';

  if (views[route]) {
    document.getElementById('content').innerHTML = views[route]();
  } else {
    document.getElementById('content').innerHTML = views['home']();
  }
}

// Initial load and handle changes
window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);