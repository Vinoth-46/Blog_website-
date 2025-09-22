// Blog posts data with image icons
const blogPosts = [
    {
        id: 1,
        title: "The Art of Minimal Writing",
        date: "January 15, 2025",
        icon: "<img src='https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0' alt='Writing' class='post-icon'>",
        category: "writing",
        featured: false,
        excerpt: "In a world saturated with information, the power of simplicity in writing has never been more valuable. Discover how stripping away the unnecessary can amplify your message.",
        content: `
            <p>In our age of information overload, writers face a unique challenge: how to capture and hold attention in a sea of endless content. The answer, paradoxically, might lie not in adding more, but in taking away.</p>

            <h3>The Power of White Space</h3>
            <p>White space isn't empty space—it's breathing room for ideas. Just as a pause in conversation can be more powerful than words, the space around your text gives readers time to absorb and reflect on what they've read.</p>

            <p>Consider how the most memorable quotes are often the shortest. They stick because they've been refined to their essence, with every unnecessary word stripped away. This is the goal of minimal writing: maximum impact through minimum means.</p>

            <h3>Finding Your Essential Voice</h3>
            <p>Every writer has a unique voice waiting to be discovered. Often, it's buried under layers of what we think we should sound like. Minimal writing is about peeling back those layers to reveal the authentic voice beneath.</p>

            <p>Start by writing naturally, as if you're explaining something to a friend. Then, edit ruthlessly. Remove adverbs, question every adjective, and ask yourself: does this word earn its place? The result is writing that feels both effortless and inevitable.</p>
        `
    },
    {
        id: 2,
        title: "Digital Minimalism for Content Creators",
        date: "January 10, 2025",
        icon: "<img src='https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0' alt='Digital' class='post-icon'>",
        category: "productivity",
        featured: false,
        excerpt: "How embracing constraints and simplicity in your digital tools can paradoxically unleash greater creativity and productivity in your content creation process.",
        content: `
            <p>The tools we use shape the work we create. In the rush to adopt every new platform and plugin, we often lose sight of a fundamental truth: constraints breed creativity.</p>

            <h3>The Tyranny of Choice</h3>
            <p>Modern content management systems offer thousands of themes, countless plugins, and infinite customization options. But this abundance can be paralyzing. When everything is possible, nothing feels quite right.</p>

            <p>By limiting our tools to the essentials, we force ourselves to focus on what truly matters: the content itself. A simple text editor, a basic publishing platform, and a clear vision—these are the only tools a writer truly needs.</p>

            <h3>Building a Sustainable Practice</h3>
            <p>Complexity is the enemy of consistency. The more moving parts in your content creation system, the more likely something will break—technically or motivationally. A minimal setup reduces friction, making it easier to maintain a regular publishing schedule.</p>

            <p>Consider this: some of the most successful blogs run on the simplest platforms. Their success comes not from technical sophistication, but from the quality and consistency of their content. This is the promise of digital minimalism: by doing less, we achieve more.</p>
        `
    },
    {
        id: 3,
        title: "The Beauty of Simple Design",
        date: "January 5, 2025",
        icon: "<img src='https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0' alt='Design' class='post-icon'>",
        category: "design",
        featured: false,
        excerpt: "Exploring how minimalist design principles create more engaging and accessible digital experiences, putting content at the forefront where it belongs.",
        content: `
            <p>Great design is invisible. It doesn't call attention to itself; instead, it quietly facilitates the connection between reader and content. This is the philosophy behind minimalist web design.</p>

            <h3>Typography as the Foundation</h3>
            <p>When you strip away decorative elements, typography becomes your primary design tool. The right typeface, properly sized and spaced, can convey mood, establish hierarchy, and guide the reader's eye through your content.</p>

            <p>Consider how a generous line height makes text more readable, or how a slightly larger font size can transform the reading experience on mobile devices. These subtle decisions have profound impacts on how your content is received.</p>

            <h3>The Mobile-First Imperative</h3>
            <p>Minimalist design naturally lends itself to mobile optimization. Without sidebars, complex navigation menus, and decorative elements, your content adapts seamlessly to any screen size. The reading experience remains consistent and pleasant across all devices.</p>

            <p>This isn't just about technical performance—though minimal sites do load faster. It's about respecting your readers' time and attention, regardless of how they choose to access your content. In a world where the majority of reading happens on mobile devices, this respect is both practical and essential.</p>
        `
    },
    {
        id: 4,
        title: "Why Minimalism Works in Design",
        date: "December 28, 2024",
        icon: "<img src='https://images.unsplash.com/photo-1652850582087-fb2054c45a4c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fG1pbmltYWxpc3QlMjBkZXNpZ258ZW58MHwwfDB8fHww' class='post-icon'>",
        category: "design",
        featured: true,
        excerpt: "A deep dive into how simplicity improves user experience and why less truly is more in the digital age.",
        content: `
            <p>In an era of overwhelming digital noise, minimalist design has emerged as a beacon of clarity. But why does this approach resonate so deeply with users, and how can creators harness its power?</p>

            <h3>Cognitive Load Theory</h3>
            <p>Our brains have limited processing capacity. When faced with cluttered interfaces, users experience decision fatigue and frustration. Minimalist design reduces cognitive load by presenting only essential elements, allowing users to focus on what truly matters.</p>

            <p>This isn't just aesthetic preference—it's neuroscience. Studies show that simplified interfaces lead to better task completion rates and higher user satisfaction. By removing distractions, we create space for meaningful interactions.</p>

            <h3>The Power of Negative Space</h3>
            <p>What we don't include is as important as what we do. Negative space guides the eye, creates visual hierarchy, and gives content room to breathe. It's the silence between notes that makes music meaningful.</p>
        `
    },
    {
        id: 5,
        title: "Top 5 Tools for Writers",
        date: "December 20, 2024",
        icon: "<img src='https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0' alt='Tools' class='post-icon'>",
        category: "productivity",
        featured: true,
        excerpt: "Cut down the noise and focus on creativity with these essential tools that prioritize simplicity over complexity.",
        content: `
            <p>The modern writer faces an overwhelming array of tools and platforms. But the best writing tools share a common trait: they get out of your way and let you focus on the words.</p>

            <h3>1. Markdown Editors</h3>
            <p>Tools like Typora or Mark Text offer distraction-free writing with simple formatting. No complex menus, no overwhelming features—just you and your words.</p>

            <h3>2. Focus Apps</h3>
            <p>Apps like Forest or Freedom help you maintain focus by blocking distracting websites and social media during writing sessions.</p>

            <h3>3. Simple Note-Taking</h3>
            <p>Whether it's Apple Notes, Google Keep, or Notion, the best note-taking tools capture ideas quickly without friction.</p>

            <h3>4. Grammar Assistants</h3>
            <p>Tools like Grammarly or Hemingway Editor help polish your prose without overwhelming you with suggestions.</p>

            <h3>5. Version Control</h3>
            <p>Simple backup solutions like Dropbox or Google Drive ensure your work is always safe and accessible across devices.</p>
        `
    },
    {
    id: 6,
    title: " Morning Habits for a Productive Day",
    date: "January 10, 2025",
    icon: "<img src='https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0' alt='Morning Habits' class='post-icon'>",
    category: "lifestyle",
    featured: true,
    excerpt: "Start your day with clarity and purpose by adopting these simple yet powerful morning habits.",
    content: `
        <p>Morning routines set the tone for the rest of the day. A few intentional actions can dramatically boost your energy and focus.</p>

        <h3>1. Wake Up Early</h3>
        <p>Gaining an extra hour in the morning provides time for self-reflection, planning, and quiet productivity.</p>

        <h3>2. Hydrate Immediately</h3>
        <p>Drinking water right after waking up kickstarts your metabolism and refreshes your system.</p>

        <h3>3. Practice Gratitude</h3>
        <p>Writing down three things you're grateful for creates a positive mindset for the day ahead.</p>

        <h3>4. Move Your Body</h3>
        <p>Even a short walk or stretching session helps improve circulation and energy levels.</p>

        <h3>5. Plan Your Day</h3>
        <p>Prioritize your top 3 tasks to focus on what truly matters, avoiding scattered productivity.</p>
    `
},
{
    id: 7,
    title: "Essential Skills for Developers in 2025",
    date: "January 15, 2025",
    icon: "<img src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV2ZWxvcGVyc3xlbnwwfDB8MHx8fDA%3D' alt='Developer Skills' class='post-icon'>",
    category: "technology",
    featured: true,
    excerpt: "Tech evolves fast—these skills will keep you ahead of the curve in 2025 and beyond.",
    content: `
        <p>The tech world moves quickly, and developers must keep up with both foundational and emerging skills.</p>

        <h3>1. Cloud Computing</h3>
        <p>Understanding AWS, Azure, or GCP is now a must for building scalable applications.</p>

        <h3>2. AI & Machine Learning</h3>
        <p>Developers who integrate AI models will have a competitive edge in multiple industries.</p>

        <h3>3. Cybersecurity Awareness</h3>
        <p>With rising threats, secure coding practices are as important as writing functional code.</p>

        <h3>4. Collaboration Tools</h3>
        <p>Proficiency with Git, CI/CD, and project management platforms ensures smoother teamwork.</p>

        <h3>5. Problem-Solving Mindset</h3>
        <p>Technical skills matter, but creative problem-solving is what sets great developers apart.</p>
    `
},
{
    id: 8,
    title: "Healthy Snacks for Busy Professionals",
    date: "February 1, 2025",
    icon: "<img src='https://plus.unsplash.com/premium_photo-1671485196355-32005a27fd02?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fEhlYWx0aHklMjBTbmFja3N8ZW58MHwwfDB8fHww' alt='Healthy Snacks' class='post-icon'>",
    category: "health",
    featured: false,
    excerpt: "Fuel your workday with nutritious snacks that boost focus and keep energy levels steady.",
    content: `
        <p>Long work hours often lead to unhealthy snacking. These options are simple, tasty, and energizing.</p>

        <h3>1. Nuts & Seeds</h3>
        <p>Almonds, walnuts, or pumpkin seeds provide healthy fats and protein.</p>

        <h3>2. Greek Yogurt</h3>
        <p>Packed with protein and probiotics, it makes a filling mid-day snack.</p>

        <h3>3. Fruit with Nut Butter</h3>
        <p>Apples or bananas with almond butter offer a mix of carbs and protein.</p>

        <h3>4. Veggie Sticks with Hummus</h3>
        <p>Crisp vegetables like carrots or cucumbers paired with hummus are refreshing and nutritious.</p>

        <h3>5. Dark Chocolate</h3>
        <p>A small piece satisfies cravings and provides antioxidants without the sugar crash.</p>
    `
},
{
    id: 9,
    title: " Travel Hacks for Stress-Free Journeys",
    date: "February 10, 2025",
    icon: "<img src='https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0' alt='Travel Hacks' class='post-icon'>",
    category: "travel",
    featured: true,
    excerpt: "Make your trips smoother with these simple but powerful travel hacks.",
    content: `
        <p>Traveling doesn’t have to be stressful. With a few clever tricks, you can make your journey more enjoyable.</p>

        <h3>1. Pack Light</h3>
        <p>A carry-on saves time, avoids baggage fees, and makes movement easier.</p>

        <h3>2. Roll Clothes Instead of Folding</h3>
        <p>Rolling saves space and reduces wrinkles compared to traditional folding.</p>

        <h3>3. Use Offline Maps</h3>
        <p>Download maps in advance to avoid getting lost when you have no internet connection.</p>

        <h3>4. Bring a Power Bank</h3>
        <p>Never risk a dead phone during your trip; a portable charger is a must.</p>

        <h3>5. Keep Copies of Documents</h3>
        <p>Digital and physical backups of your passport and tickets ensure peace of mind.</p>
    `
},
{
    id: 10,
    title: " Books That Will Change How You Think",
    date: "March 1, 2025",
    icon: "<img src='https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0' alt='Books' class='post-icon'>",
    category: "self-growth",
    featured: true,
    excerpt: "Expand your perspective and unlock new ways of thinking with these powerful reads.",
    content: `
        <p>Books have the power to reshape your worldview and inspire transformation. Here are 5 worth exploring.</p>

        <h3>1. Thinking, Fast and Slow by Daniel Kahneman</h3>
        <p>A deep dive into how we make decisions, blending psychology and behavioral economics.</p>

        <h3>2. Atomic Habits by James Clear</h3>
        <p>A guide to building good habits and breaking bad ones with practical strategies.</p>

        <h3>3. The Power of Now by Eckhart Tolle</h3>
        <p>A spiritual classic that emphasizes mindfulness and living in the present moment.</p>

        <h3>4. Deep Work by Cal Newport</h3>
        <p>Explores the value of focus in a distracted world and how to cultivate it.</p>

        <h3>5. Sapiens by Yuval Noah Harari</h3>
        <p>A sweeping history of humankind that challenges our understanding of culture and progress.</p>
    `
}


];

// Theme management - using memory instead of localStorage for Claude compatibility
let currentTheme = 'light';
document.documentElement.setAttribute('data-theme', currentTheme);

// State management
let currentView = 'home';
let currentPost = null;
let currentCategory = null;

// DOM elements
const content = document.getElementById('content');
const staticSections = document.getElementById('static-sections');
const navHome = document.querySelector('.nav-home');
const navAbout = document.querySelector('.nav-about');
const themeToggle = document.querySelector('.theme-toggle');
const scrollTopBtn = document.querySelector('.scroll-top');
const newsletterForm = document.getElementById('newsletter-form');
const featuredPostsList = document.getElementById('featured-posts-list');

// Theme toggle functionality
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    themeToggle.textContent = currentTheme === 'light' ? '🌙' : '☀️';
}

// Scroll to top functionality
function toggleScrollTopBtn() {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
}

// Newsletter subscription
function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = document.getElementById('newsletter-email').value;
    alert(`Thank you for subscribing with email: ${email}`);
    document.getElementById('newsletter-email').value = '';
}

// Filter posts by category
function filterByCategory(category) {
    currentCategory = category;
    const filteredPosts = category ? blogPosts.filter(post => post.category === category) : blogPosts;
    renderFilteredPosts(filteredPosts, category);
}

// Render functions
function renderHome() {
    staticSections.classList.remove('hidden');

    const heroHTML = `
        <div class="content-wrapper">
            <div class="hero-section">
                <div class="hero-content">
                    <h2 class="hero-title">Welcome to Minimal Blog</h2>
                    <p class="hero-subtitle">Where simplicity meets profound insights. Explore thoughtful content designed to inspire and inform.</p>
                </div>
            </div>
        </div>
    `;

    const postsHTML = blogPosts.map(post => `
        <article class="post-item" data-id="${post.id}">
            <div class="post-image">
                ${post.icon}
            </div>
            <div class="post-date">${post.date}</div>
            <h2 class="post-title">${post.title}</h2>
            <p class="post-excerpt">${post.excerpt}</p>
            <a href="#" class="read-more">Read more →</a>
        </article>
    `).join('');

    content.innerHTML = `
        ${heroHTML}
        <div class="content-wrapper">
            <div class="post-list">
                ${postsHTML}
            </div>
        </div>
    `;

    // Render featured posts
    renderFeaturedPosts();

    // Add click handlers
    document.querySelectorAll('.post-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const postId = parseInt(item.dataset.id);
            showPost(postId);
        });
    });
}

function renderFeaturedPosts() {
    const featuredPosts = blogPosts.filter(post => post.featured);
    const featuredHTML = featuredPosts.map(post => `
        <article class="post-item" data-id="${post.id}">
            <div class="post-image">${post.icon}</div>
            <h3 class="post-title">${post.title}</h3>
            <p class="post-excerpt">${post.excerpt}</p>
            <a href="#" class="read-more">Read more →</a>
        </article>
    `).join('');

    featuredPostsList.innerHTML = featuredHTML;

    // Add click handlers for featured posts
    featuredPostsList.querySelectorAll('.post-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const postId = parseInt(item.dataset.id);
            showPost(postId);
        });
    });
}

function renderFilteredPosts(posts, category) {
    staticSections.classList.add('hidden');

    const categoryTitle = category ? category.charAt(0).toUpperCase() + category.slice(1) : 'All Posts';
    const postsHTML = posts.map(post => `
        <article class="post-item" data-id="${post.id}">
            <div class="post-image">
                ${post.icon}
            </div>
            <div class="post-date">${post.date}</div>
            <h2 class="post-title">${post.title}</h2>
            <p class="post-excerpt">${post.excerpt}</p>
            <a href="#" class="read-more">Read more →</a>
        </article>
    `).join('');

    content.innerHTML = `
        <div class="content-wrapper">
            <div class="hero-section">
                <div class="hero-content">
                    <h2 class="hero-title">${categoryTitle} Posts</h2>
                    <p class="hero-subtitle">Discover articles in the ${categoryTitle.toLowerCase()} category</p>
                    <a href="#" class="back-link" onclick="showHome()">← Back to Home</a>
                </div>
            </div>
            <div class="post-list">
                ${postsHTML}
            </div>
        </div>
    `;

    // Add click handlers
    document.querySelectorAll('.post-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const postId = parseInt(item.dataset.id);
            showPost(postId);
        });
    });
}

function renderPost(post) {
    staticSections.classList.add('hidden');

    content.innerHTML = `
        <div class="content-wrapper">
            <article class="single-post">
                <a href="#" class="back-link">← Back to posts</a>
                <div class="post-header">
                    <div class="post-hero-image">
                        ${post.icon}
                    </div>
                    <h2>${post.title}</h2>
                    <div class="post-meta">Published on ${post.date}</div>
                </div>
                <div class="post-content">
                    ${post.content}
                </div>
            </article>
        </div>
    `;

    // Add back button handler
    document.querySelector('.back-link').addEventListener('click', (e) => {
        e.preventDefault();
        showHome();
    });
}

function renderAbout() {
    staticSections.classList.add('hidden');

    content.innerHTML = `
        <div class="content-wrapper">
            <div class="about-content">
                <h2>About This Blog</h2>
                <p>This is a space dedicated to the art of thoughtful, minimal writing. In an era of information overload, we believe in the power of simplicity to cut through the noise and deliver meaningful content.</p>
                <p>Every post here is crafted with intention, every word chosen with care. We explore ideas at the intersection of technology, creativity, and human experience, always seeking the essential truth beneath the surface.</p>
                <p>Join us in celebrating the beauty of simplicity and the profound impact of well-crafted words.</p>
                <p><strong>About Vinoth:</strong> A passionate writer and minimalist who believes in the power of clear communication. With years of experience in technology and design, Vinoth brings unique insights to the intersection of digital creativity and human experience.</p>
            </div>
        </div>
    `;
}

// Navigation functions
function showHome() {
    currentView = 'home';
    currentCategory = null;
    updateNavigation();
    renderHome();
    window.scrollTo(0, 0);
}

function showPost(postId) {
    currentPost = blogPosts.find(p => p.id === postId);
    if (currentPost) {
        currentView = 'post';
        updateNavigation();
        renderPost(currentPost);
        window.scrollTo(0, 0);
    }
}

function showAbout() {
    currentView = 'about';
    currentCategory = null;
    updateNavigation();
    renderAbout();
    window.scrollTo(0, 0);
}

function updateNavigation() {
    navHome.classList.toggle('active', currentView === 'home' || currentView === 'post' || currentView === 'category');
    navAbout.classList.toggle('active', currentView === 'about');
}

// Event listeners
themeToggle.addEventListener('click', toggleTheme);

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', toggleScrollTopBtn);

navHome.addEventListener('click', (e) => {
    e.preventDefault();
    showHome();
});

navAbout.addEventListener('click', (e) => {
    e.preventDefault();
    showAbout();
});

newsletterForm.addEventListener('submit', handleNewsletterSubmit);

// Category filter handlers
document.querySelectorAll('.category-list a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = e.target.dataset.category;
        filterByCategory(category);
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Set initial theme icon
    themeToggle.textContent = currentTheme === 'light' ? '🌙' : '☀️';
    showHome();

    // Add some entrance animations
    setTimeout(() => {
        document.querySelectorAll('.post-item').forEach((item, index) => {
            item.style.animationDelay = `${index * 0.1}s`;
        });
    }, 100);
});

// Add smooth scrolling for better UX
document.documentElement.style.scrollBehavior = 'smooth';

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey) {
        switch(e.key) {
            case 'd':
                e.preventDefault();
                toggleTheme();
                break;
            case 'h':
                e.preventDefault();
                showHome();
                break;
            case 'Escape':
                if (currentView === 'post') {
                    showHome();
                }
                break;
        }
    }
});

// Search functionality (basic)
function searchPosts(query) {
    const searchResults = blogPosts.filter(post => 
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        post.category.toLowerCase().includes(query.toLowerCase())
    );
    renderFilteredPosts(searchResults, null);
}

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Performance optimization: lazy load animations
function setupAnimations() {
    const animatedElements = document.querySelectorAll('.post-item, .hero-section, .about-content');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Make showHome function globally available
window.showHome = showHome;