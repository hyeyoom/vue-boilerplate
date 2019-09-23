import VueRouter from 'vue-router';

/**
 * vue-router custom
 *
 * @author hyeyoom
 */
class RouterExt {

    private readonly DEFAULT_TITLE: string = 'Todo App';

    public bind(router: VueRouter) {

        router.afterEach((to, _) => {
            document.title = to.meta.title || this.DEFAULT_TITLE;
        })
    }

}

export default new RouterExt();