import type {
    Ref,
} from 'vue';

import {
    ref as r,
    useCssModule,
    defineComponent,
} from 'vue';

import Timer from './components/Timer/Timer.vue'

export default defineComponent({
    name: 'App',
    components: {
        Timer,
    },
    setup() {
        const $style = useCssModule();
        const classList: Ref<string[]> = r([
            $style['App'],
        ]);

        return {
            classList,
        };
    },
});
