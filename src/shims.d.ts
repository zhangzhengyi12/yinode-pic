interface message {
  info: (text: string) => void;
  success:(text: string) => void;
  warning:(text: string) => void;
  error:(text: string) => void;
}

declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

import { PluginFunction } from 'vue';

export interface NotificationOptions {
    title?: string;
    text?: string;
    type?: string;
    group?: string;
    duration?: number;
    speed?: number;
    data?: object;
}

declare module 'vue/types/vue' {
    interface Vue {
        $notify: (options: NotificationOptions | string) => void;
    }
}

declare class VueNotification {
    static install: PluginFunction<never>;
}
