<template>
    <el-container>
        <el-header>
            <h3 style="color: white">主页</h3>
        </el-header>
        <el-main>
            <el-row>
                <el-col :lg="12" :sm="24">
                    <h1>欢迎你，实验人员！</h1>
                </el-col>
                <el-col :lg="12" :sm="24">
                    <h2>公告栏</h2>
                    <div v-for="announcement of announcementData" :key="announcement.id" class="announcement-card">

                        <span><i class="el-icon-date"></i>{{ new Date(announcement.create_timestamp).toLocaleString() }} </span>
                        <span class="author"><i class="el-icon-user-solid "></i>{{ announcement.author_username }} </span>
                        <h3>{{announcement.title}}</h3>
                        <p>{{announcement.content}}</p>

                    </div>
                </el-col>
            </el-row>

        </el-main>
        <el-footer>
            版权所有哦
        </el-footer>
    </el-container>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                announcementData: []
            }
        },

        mounted() {
            this.getAnnouncement()
        },

        methods: {
            getAnnouncement() {
                this.axios.get('/api/announce/all').then(res => {
                    if (res.data.status == 0) {
                        this.announcementData = res.data.data
                    } else {
                        console.debug(res)
                    }
                }).catch(err => {
                    if (err) {
                        console.error(err)
                    }
                })
            },
            getTeachersInfo() {
                this.axios.get('/api/info/staffs').then(res => {

                })
            }
        }
    }
</script>

<style scoped>
    .el-header {
        background-color: black;
        color: white;
        vertical-align: center;
    }

    .author {
        float: right;
    }

    .announcement-card {
        /*width: 30rem;*/
        border: solid thin;
        padding: 1rem 2rem;
        border-radius: 1rem;
        margin: 1rem 0;
    }
</style>