<template>
  <form class="data-form-container" id="data-form-container" @submit.prevent="handleSubmit">
    <div class="form-item">
      <div class="input-area">
        <input
          type="text"
          maxlength="10"
          v-model="formData.nickname"
          placeholder="用户昵称"
        />
        <span>{{ formData.nickname.length }}/10</span>
      </div>
      <div class="error">{{ nicknameError }}</div>
    </div>
    <div class="form-item">
      <div class="text-area" ref="container">
        <textarea
          maxlength="300"
          v-model="formData.content"
          placeholder="输入内容"
        ></textarea>
        <span>{{ formData.content.length }}/300</span>
      </div>
      <div class="error">{{ contentError }}</div>
    </div>
    <div class="form-item">
      <div class="button-area">
        <button :disabled="isSubmitIng">
          {{ isSubmitIng ? "提交中..." : "提交" }}
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import showMessage from "@/utils/showMessage.js";
export default {
  data() {
    return {
      formData: {
        nickname: "",
        content: "",
      },
      isSubmitIng: false,
      nicknameError: "",
      contentError: "",
    };
  },
  methods: {
    handleSubmit() {
      this.nicknameError = this.formData.nickname ? "" : "请输入昵称";
      this.contentError = this.formData.content ? "" : "请输入内容";
      if (this.nicknameError || this.contentError) {
        return;
      }
      this.isSubmitIng = true;
      this.$emit("submit", this.formData, (successInfo) => {
        showMessage({
          content: successInfo,
          type: "success",
          container: this.$refs.container,
          duration: 1000,
          callback:  () => { 
            this.isSubmitIng = false;
            this.formData.nickname = '',
            this.formData.content = '';
          },
        });
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.data-form-container {
  padding: 20px 0;
  box-sizing: border-box;
  .input-area {
    position: relative;
    box-sizing: border-box;
    width: 50%;
    input {
      display: block;
      width: 100%;
      outline: none;
      border: 1px dashed @gray;
      line-height: 40px;
      height: 40px;
      font-size: 14px;
      border-radius: 3px;
      box-sizing: border-box;
      padding: 0 10px;
      &:focus {
        border: 1px dashed @primary;
      }
    }
  }
  .form-item {
    span {
      color: @gray;
      font-size: 12px;
      position: absolute;
      bottom: 5px;
      right: 5px;
    }
  }
  .error {
    margin-bottom: 10px;
    color: @danger;
    font-size: 14px;
    line-height: 20px;
    height: 20px;
  }
  .text-area {
    position: relative;
    textarea {
      width: 100%;
      box-sizing: border-box;
      border-radius: 3px;
      outline: none;
      padding: 10px;
      font-size: 14px;
      min-height: 8em;
      border: 1px dashed @gray;
      resize: none;
      &:focus {
        border: 1px dashed @primary;
      }
    }
  }
  .button-area {
    button {
      background: @primary;
      outline: none;
      padding: 5px 20px;
      border: none;
      border-radius: 5px;
      color: #fff;
      font-size: 14px;
      cursor: pointer;
      &:hover {
        background: darken(@primary, 10%);
      }
      &:disabled {
        cursor: not-allowed;
        background: lighten(@primary, 20%);
      }
    }
  }
}
</style>