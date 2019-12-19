var prefixed = qs.parse('?a=b&c=d', { ignoreQueryPrefix: true });
assert.deepEqual(prefixed, { a: 'b', c: 'd' });
//解析?<Link to="/?name:xsa&age=ddd">Home</Link>
