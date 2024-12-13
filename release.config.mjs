/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
  branches: ["main"],
  // plugins: [
  //   '@semantic-release/commit-analyzer',
  //   '@semantic-release/release-notes-generator',
  //   // [
  //   //   '@semantic-release/changelog',
  //   //   {
  //   //     changelogFile: 'docs/CHANGELOG.md',
  //   //   },
  //   // ],
  //   // '@semantic-release/npm',
  //   [
  //     '@semantic-release/git',
  //     {
  //       // 寫在 assets 裡的內容可以在 CI 後被 commit 到 git repository 內
  //       // 預設是 ['CHANGELOG.md', 'package.json', 'package-lock.json', 'npm-shrinkwrap.json']
  //       assets: ['docs/CHANGELOG.md'],
  //       // "message": "chore(release): ${nextRelease.version} [skip ci]"
  //     },
  //   ],
  // ],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    [
      "@semantic-release/git",
      {
        assets: ["package.json", "CHANGELOG.md"], // 指定要提交的檔案
        message: "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
    "@semantic-release/github",
  ],
};