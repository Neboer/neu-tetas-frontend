<template>
    <el-container>
        <el-alert
                :title=alert
                type="warning"
                :style="{display: show_alert}"
        >
        </el-alert>
        <el-header style="height: auto">
            <img style="max-height: 6rem" src="../assets/neu.jpg"/>
        </el-header>
        <el-main style="text-align: center">
            <div style="margin: auto; width: 40rem">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="用户名">
                        <el-input v-model="form.username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input v-model="form.password" type="password"></el-input>
                    </el-form-item>
                    <el-form-item label="验证码">
                        <el-col :span="11">
                            <el-input v-model="form.captcha"></el-input>
                        </el-col>
                        <el-col :span="11">
                            <img :src="captcha_url" @click="refresh_captcha()">
                        </el-col>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submit()">登录</el-button>
                        <el-button>使用统一身份认证</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                form: {
                    username: '',
                    password: '',
                    captcha: ''
                },
                captcha_url: "/auth/captcha",
                show_alert: false,
                alert: "密码错误。"
            }
        },
        props: {
            msg: String
        },
        methods: {
            refresh_captcha() {
                this.captcha_url = ""
                this.captcha_url = "/auth/captcha"
            },
            submit() {
                this.axios.post("/auth/login", this.form).then((code) => {
                    if (code == 0) {
                        // 登录成功，准予跳转。
                    } else {
                        if (code == 1) {
                            this.alert = '验证码错误'
                        } else if (code == 4) {
                            this.alert = '用户已被禁止登录'
                        } else {
                            this.alert = '用户名或密码错误'
                        }
                    }
                    this.show_alert = true
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
