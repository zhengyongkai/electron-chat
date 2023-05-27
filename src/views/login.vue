<template>
  <div class="login">
    <div class="login-lang">
      <lang-change />
    </div>
    <div class="login-body">
      <el-form :model="form">
        <h3>CNCS Chat System</h3>
        <div>
          <el-form-item>
            <el-input v-model="form.name">
              <template #prefix>
                <span>
                  <el-icon>
                    <User />
                  </el-icon>
                </span>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="form.name">
              <template #prefix>
                <span>
                  <el-icon>
                    <Lock />
                  </el-icon>
                </span>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="form.remember" label="记住密码" size="large" />
          </el-form-item>
          <el-form-item style="width: 100%">
            <el-button size="large" type="primary" style="width: 100%">
              {{ t('btns.login') }}
            </el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { User, Lock } from '@element-plus/icons-vue'
import langChange from '@/components/main/lang.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n() // 实例
const form = ref({
  name: '',
  password: '',
  remember: false
})
</script>

<style lang="scss">
.login {
  @include common-layout-flex-ct;
  @include box-fix-all;
  background-color: $--common-color-blue;
  .login-body {
    @include padding(25px, 20px, 25px, 20px);
    @include radius(6);
    background-color: $--common-color-white;
    // height: 300px;
    width: 360px;

    h3 {
      @include text-align;
      margin-bottom: 24px;
      color: $--common-color-info;
    }
  }
  .login-lang {
    position: absolute;
    top: 20px;
    right: 20px;
  }
}
</style>
