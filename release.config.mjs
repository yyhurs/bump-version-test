/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
  branches: ["main"],
  repositoryUrl: "https://github.com/yyhurs/bump-version-test.git",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    [
      "@semantic-release/npm",
      {
        "npmPublish": false,
        "tarballDir": "dist"
      }
    ],
    [
      "@semantic-release/git",
      {
        assets: ["package.json", "CHANGELOG.md"],
        message: "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
    "@semantic-release/github",
  ],
};