import type {
    Ref,
} from 'vue';

import {
    ref as r,
    useCssModule,
    defineComponent,
} from 'vue';

export default defineComponent({
    name: '_Dummy',
    setup() {
        const $style = useCssModule();
        const classList: Ref<string[]> = r([
            $style['_Dummy'],
        ]);

        return {
            classList,
        };
    },
});
