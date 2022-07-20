const navigationBtn = document.getElementById('nav-btn')

navigationBtn.addEventListener('click', () => {
    document.querySelector('.navigation__list').classList.toggle('navigation__list--show')
})

const getArticles = () => {
    const articles = [
        {
            autorName: 'Jessica Andrews',
            autorStatus: 'Content manager',
            title: 'weekly newsletter: Tweets for higher Engagements',
            description: 'From SEO to integrating with Paid Advertising. this article covers it all.',
            srcImage: './Assets/Main Article Image.png',
            avatarSrcImage: './Assets/User Avatar.png'
        },{
            autorName: 'Spencer David',
            autorStatus: 'SEO Specialist',
            title: '7 Tips for Organic Traffic',
            description: 'From SEO to integrating with Paid Advertising. this article covers it all.',
            srcImage: './Assets/Article 1_Image.png',
            avatarSrcImage: './Assets/User Avatar-1.png'
        },{
            autorName: 'Sara Frey',
            autorStatus: 'Business leader',
            title: 'How To Start Your Own Business',
            description: 'Starting your own business in 2021 has never beeb easier.',
            srcImage: './Assets/Article 2_Image.png',
            avatarSrcImage: './Assets/User Avatar-2.png'
        },{
            autorName: 'David Suns',
            autorStatus: 'Brand manager',
            title: '5 Tips for Better Branding',
            description: 'From SEO to integrating with Paid Advertising. this article covers it all.',
            srcImage: './Assets/Article 3_Image.png',
            avatarSrcImage: './Assets/User Avatar-3.png'
        }
    ]

    return articles
}

const showArticlesList = () => {
    const articles = getArticles()

    const HTMLArticlesList = articles.map(article => {
        return `<li class="card">
            <img src="${article.srcImage}" alt="${article.title} picture." class="card__img">
            <div class="card__text">
                <h3 class="card__title">${article.title}</h3>
                <p class="card__description">${article.description}</p>
                <footer class="card__footer">
                    <img src="${article.avatarSrcImage}" alt="${article.autorName} picture." class="card__avatar">
                    <div class="card__footer-text">
                        <h5 class="card__footer-autor">${article.autorName}</h5>
                        <span class="card__footer-status">${article.autorStatus}</span>
                    </div>
                </footer>
            </div>
        </li>`
    }).join('')
    
    document.getElementById('articles-list').innerHTML = HTMLArticlesList
}

showArticlesList()