const socialBar = document.getElementsByClassName('social-links');
const socialInfo = [
    { name: 'LinkedIn', icon:'linkedin', link: 'https://www.linkedin.com/in/taras-makarchuk-82a187172/' },
    // { name: 'Facebook', icon:'facebook', link: 'https://www.facebook.com/taras.makarchuk.30/' },
    { name: 'Bitbucket', icon:'bitbucket', link: 'https://bitbucket.org/TarasMakarchuk/' },
    { name: 'Github', icon:'github', link: 'https://github.com/TarasMakarchuk' },
];

Array.from(socialBar).forEach(element => {
    socialInfo.forEach(node => {
        let item = document.createElement('li');
        element.appendChild(item).setAttribute('class', 'nav-item');
        let link = document.createElement('a');
        item.appendChild(link).setAttribute('class', 'nav-link');
        link.setAttribute('href', node.link);
        link.setAttribute('title', node.name);
        let icon = document.createElement('i');
        link.appendChild(icon).setAttribute('class', `fab fa-${node.icon}`);
        let itemTitle = document.createElement('span');
        icon.appendChild(itemTitle).setAttribute('class', 'menu-title sr-only');
        itemTitle.innerText = node.name;
    })
});