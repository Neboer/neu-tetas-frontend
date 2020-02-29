<template>
    <el-container>
        <el-header>
            <h1>主页</h1>
        </el-header>
        <el-main>
            <h2>公告栏</h2>
            <div v-for="announcement of announcementData" v-bind:key="announcement.id" class="announcement-card">

                <span><i class="el-icon-date"></i>{{ new Date(announcement.create_timestamp).toLocaleString() }} </span>
                <span class="author"><i class="el-icon-user-solid "></i>{{ announcement.author_username }} </span>
                <h3>{{announcement.title}}</h3>
                <p>{{announcement.content}}</p>

            </div>
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
                test: {
                    "status": 0,
                    "data": [
                        {
                            "id": 1,
                            "author_username": "test",
                            "create_timestamp": "2020-02-29T13:14:35Z",
                            "title": "系统公告",
                            "content": "本系统摸鱼要素过多，正在加速开发中。"
                        }
                    ]
                },
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
            }
        }
    }
</script>

<style scoped>
    .el-header {
        background-color: lightcyan;
    }

    .author {
        float: right;
    }

    .announcement-card {
        width: 30rem;
        border: solid thin;
        padding: 3rem 5rem;
        border-radius: 1rem;
    }
</style>