import { createI18n } from 'vue-i18n'
import en from '../locales/en.json'
import fr from '../locales/fr.json'
import ja from '../locales/ja.json'
import zhtw from '../locales/zh-tw.json'
import zhcn from '../locales/zh-cn.json'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    fallbackLocale: 'en',
    globalInjection: true,
    locale: 'en',
    messages: {
      en, 
      fr, 
      ja,
      zhcn,
      zhtw,
    }
  })

  vueApp.use(i18n)
})