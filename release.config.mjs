/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
  branches: ["main"],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    // [
    //   '@semantic-release/changelog',
    //   {
    //     changelogFile: 'docs/CHANGELOG.md',
    //   },
    // ],
    // '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        // 寫在 assets 裡的內容可以在 CI 後被 commit 到 git repository 內
        // 預設是 ['CHANGELOG.md', 'package.json', 'package-lock.json', 'npm-shrinkwrap.json']
        assets: ['docs/CHANGELOG.md'],
        // "message": "chore(release): ${nextRelease.version} [skip ci]"
      },
    ],
  ],
};