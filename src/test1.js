// test 1-1

// feat: 新增功能

// fix: prevent racing of requests

// Introduce a request id and a reference to latest request. Dismiss
// incoming responses other than from latest request.

// Remove timeouts which were used to mitigate the racing issue but are
// obsolete now.

// Reviewed-by: Z
// Refs: #123

// 不依照 conventional commit message 的格式

// fix(bug): 新增一個 fix 的 commit