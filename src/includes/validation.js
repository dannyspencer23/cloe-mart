import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure
} from 'vee-validate'

import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  min_value as minVal,
  max_value as maxVal,
  confirmed,
  not_one_of as excluded
} from '@vee-validate/rules'

export default {
  install(app) {
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)
    app.component('ErrorMessage', ErrorMessage)
    // app.component("configure", configure);

    defineRule('required', required)
    defineRule('tos', required)
    defineRule('min', min)
    defineRule('max', max)
    defineRule('alpha_spaces', alphaSpaces)
    defineRule('email', email)
    defineRule('min_value', minVal)
    defineRule('max_value', maxVal)
    defineRule('password_mismatch', confirmed)
    defineRule('excluded', excluded)

    configure({
      generateMessage: (konteks) => {
        const messages = {
          required: `Kolom ${konteks.field} tidak boleh kosong.`, //menggunakan (`) simbol backtick
          min: `${konteks.field} terlalu pendek.`, //menggunakan (`) simbol backtick
          max: `${konteks.field} terlalu panjang.`, //menggunakan (`) simbol backtick
          alpha_spaces: `${konteks.field} hanya boleh alpabet dan spasi.`, //menggunakan (`) simbol backtick
          email: `${konteks.field} harus berupa email valid.`, //menggunakan (`) simbol backtick
          min_value: `${konteks.field} is too low.`, //menggunakan (`) simbol backtick
          max_value: `${konteks.field} is too high.`, //menggunakan (`) simbol backtick
          excluded: `You are not allowed to use this value for the field ${konteks.field}`, //menggunakan (`) simbol backtick
          // country_excluded: `Due to restrictions, we do not accept users from this location.`, //menggunakan (`) simbol backtick
          password_missmatch: `Password tidak sesuai.`, //menggunakan (`) simbol backtick
          tos: `Anda harus menyetujui ketentuan layanan` //menggunakan (`) simbol backtick
        }

        const message = messages[konteks.rule.name]
          ? messages[konteks.rule.name]
          : `Kolom ${konteks.field} tidak sesuai.`
        return message
      },

      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true
    })
  }
}
