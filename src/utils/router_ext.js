/**
 * vue-router custom
 *
 * @author hyeyoom
 */
class RouterExt {
    constructor() {
        this.DEFAULT_TITLE = 'Todo App';
    }
    bind(router) {
        router.afterEach((to, _) => {
            document.title = to.meta.title || this.DEFAULT_TITLE;
        });
    }
}
export default new RouterExt();
//# sourceMappingURL=router_ext.js.map