module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/typescript/recommended'],
  plugins: ['vue'],
  globals: {
    ref: 'readonly',
    getCurrentInstance: 'readonly',
    onMounted: 'readonly',
    nextTick: 'readonly',
    useRoute: 'readonly',
    onUpdated: 'readonly',
    onBeforeMount: 'readonly',
    onBeforeUnmount: 'readonly',
    onUnmounted: 'readonly',
    reactive: 'readonly',
    shallowRef: 'readonly',
    shallowReactive: 'readonly',
    toRefs: 'readonly',
    useRouter: 'readonly',
    watchEffect: 'readonly',
    computed: 'readonly',
    watch: 'readonly',
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineComponent: 'readonly',
    defineStore: 'readonly',
    createPinia: 'readonly',
    inject: 'readonly',
    provide: 'readonly'
  },
  rules: {
    // //通用规则//
    // http://eslint.cn/docs/rules/

    // 符号位置规则
    'no-console': 2,
    'no-unused-vars': 2,
    'comma-style': 1, // 逗号在末尾处
    'comma-spacing': 1, // 逗号后有至少一个空格
    'comma-dangle': [1, 'never'], // 强制不使用末尾逗号
    eqeqeq: 2, // 使用===,!==
    'operator-assignment': 2, // 简化运算赋值操作
    'operator-linebreak': [0, 'before'], // 运算符号显示在属性前
    quotes: [1, 'single'], // 使用单引号
    semi: [1, 'never'],
    'semi-style': [1, 'last'], // 分号在末尾处
    'no-undef': 2,
    'semi-spacing': [
      1,
      {
        before: false,
        after: true
      }
    ], // 强制分号后又至少一个空格

    // 空格规则
    'array-bracket-spacing': 2, // 强制数组[]括号前后不空格
    'arrow-spacing': 1, // 要求箭头函数的箭头部分前后的空格
    'block-spacing': [1, 'always'], // 代码块{}前后空格;{return}>{ return }
    'computed-property-spacing': 1, // 计算属性[]内禁止空格 obj[ i] => obj[i]
    'func-call-spacing': 1, // 方法调用时，方法名与()不允许空格 func () => func()
    indent: [
      1,
      2,
      {
        SwitchCase: 1, // switch case缩进缩进2格（2x1）
        VariableDeclarator: 'first' // const let var 对齐缩进
      }
    ],
    'no-useless-escape': 0,
    'key-spacing': 1, // 对象键值之间空格
    'keyword-spacing': 1, // 关键字前后空格
    'no-multi-spaces': 1, // 禁止多个连续空格
    'no-whitespace-before-property': 1, // 禁止点调用有空格 a. b => a.b
    'object-curly-spacing': [1, 'always'], // 一般{}中使用一致的空格规则
    'space-before-blocks': 1, // 强制代码块之前有空格
    'space-before-function-paren': [
      0,
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ], // function方法名和括号之前的空格
    'switch-colon-spacing': 1, // switch case冒号前后空格
    'space-in-parens': [1, 'never'], // 强制小括号()前后不允许空格
    'space-infix-ops': 1, // 操作符+-*/%?:=...前后空格
    'space-unary-ops': [
      1,
      {
        words: true, // 单词类一元操作符之间空格，例：typeof
        nonwords: false // 符号类不空格，例：++ --
      }
    ],

    // 空行规则
    'no-multiple-empty-lines': [
      1,
      {
        max: 1, // 连续最大空行数
        maxEOF: 0 // 文件末尾空行数
      }
    ],

    // 换行规则
    'array-bracket-newline': [1, 'consistent'], // []括号换行
    'array-element-newline': [1, 'consistent'], // []元素换行
    'object-curly-newline': [
      1,
      {
        multiline: true,
        consistent: true
      }
    ], // 大括号换行
    'object-property-newline': [
      1,
      {
        allowAllPropertiesOnSameLine: true
      }
    ], // 属性换行，允许全在同一行

    // 注释规则
    'lines-around-comment': [
      1,
      {
        allowBlockStart: true, // 注释出现在块语句的开始位置
        allowObjectStart: true, // 注释出现在对象字面量的开始位置
        allowArrayStart: true, // 注释出现在数组字面量的开始位置
        allowClassStart: true, // 注释出现在object块的开始位置
        beforeBlockComment: true, // 块注释之前空行
        beforeLineComment: false, // 行注释之前空行
        ignorePattern: '#'
      }
    ],
    'spaced-comment': 1, // 注释符号后面空格

    // //vue规则//
    // https://eslint.vuejs.org/rules/

    // template,script,style标签的结束标签强制换行，允许在一行
    'vue/block-tag-newline': [
      1,
      {
        singleline: 'always',
        multiline: 'always',
        maxEmptyLines: 1
      }
    ],

    // template中的组件名称格式
    'vue/component-name-in-template-casing': [
      0,
      'kebab-case',
      {
        registeredComponentsOnly: false
      }
    ],

    // 不检测标签的第一个属性的换行规则
    'vue/first-attribute-linebreak': 0,

    'vue/no-mutating-props': 0,

    // html标签的`>`不换行
    'vue/html-closing-bracket-newline': [
      0,
      {
        singleline: 'never',
        multiline: 'never'
      }
    ],
    'vue/html-indent': [
      1,
      2,
      {
        alignAttributesVertically: false // 不要求第二行属性与第一行对其
      }
    ],

    // 每行最大属性数
    'vue/max-attributes-per-line': [
      1,
      {
        singleline: 100, // 一行允许的属性数量
        multiline: 10 // 标签换行后每行允许的单词数量
      }
    ],

    // 禁用让组件名称保持多个字的规则
    'vue/multi-word-component-names': 0,

    // props参数不要求有默认值
    'vue/require-default-prop': 0,

    // 单行元素文本内容前后换行
    'vue/singleline-html-element-content-newline': 0
  }
}
