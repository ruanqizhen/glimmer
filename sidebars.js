// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      label: '序',
      id: 'README',
    },
	'w01',
	'w02',
	'w03',
    {
      type: 'link',
      label: 'GitHub 项目',
      href: 'https://github.com/ruanqizhen/glimmer',
    },
    {
      type: 'link',
      label: '编者的博客',
      href: 'https://blog.qizhen.xyz',
    },
  ],
};

module.exports = sidebars;
