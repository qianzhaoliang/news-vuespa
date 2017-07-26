<template>
	<div id="search">
		<mt-header title="搜索">
              <router-link to="/index" slot="left">
                <mt-button icon="back">返回</mt-button>
              </router-link>
              <mt-button icon="more" slot="right"></mt-button>
        </mt-header> 
		<headItem></headItem>
		<div class="search-box-container">
			<div class="box-container">
				
					<input type="search" value="" ref='search'>
			</div>
			<div class="btn" @click="search">
				<span>搜索</span>
			</div>
		</div>
		<div id="news-wrapper2">
            <ul>
                <div v-for="item in res" tag='div' class="new-wrapper">
                    <a :href="item.url" class="new-box">
                        <div class="new-des">
                             <h2>{{item.title}}</h2>
                            <span>{{item.time}}</span>
                        </div>
                       
                    </a>
                </div>
                <!-- <aside :show.sync="showRight" placement="right" header="title" width="350">{{item.title}}</aside> -->
            </ul>
        </div>
	</div>
</template>

<script>
	import headItem from 'src/components/item.vue'
	import axios from'axios'
	import { Header,Lazyload, Swipe, SwipeItem,Indicator } from 'mint-ui'

	export default{
		data(){
			return {
				res: [],
                newslist:[],
                name:'',
                newSrc:[]
			}
		},
		created(){
			this.res = ''
		},
		methods:{
			search(){
				var iKeyword = this.$refs.search.value;
				console.log(iKeyword);
				var self_ = this;
				axios.get('/search',{
	                params: {
	                	keyword:iKeyword,
						appkey:'48be438350ac1638'
	                }
	            })
	            .then(function(res){
					console.log('go',res);
					self_.res = res.data.result.list;


	            })
	            .catch(function(res){
					console.log('err',res);
	            })
			},

		},
		components:{
			headItem
		}
	}
</script>

<style scoped>
	#search{
		width: 100%;
		height: 100%;
		background: url(../image/bg.png) ;
	}
	.search-box-container{
		background: #fff;
		margin: 15px 17px 0;
	    position: relative;
	    top:60px;
	    display: -webkit-box;
	    -webkit-box-pack: start;
	    z-index: 999;
	    height: 44px;
	    line-height: 44px;
	    border: 1px solid #ececec;
	}
	.search-box-container .box-container{
		    -webkit-box-flex: 1;
		    height: 44px;
		    position: relative;
	}
	.search-box-container .box-container .search-box-container .box-container{
		   position: absolute;
	    top: 45px;
	    width: 100%;
	    font-size: 16px;
	    left: -2px;
	}
	.search-box-container .box-container input[type=search]{
		height: 44px;
	    padding: 0 45px 0 0;
	    position: absolute;
	    top: 0;
	    left: 4px;
	    right: 40px;
	    width: 100%;
	    border: 0;
	    border-radius: 0;
	    background: 0 0;
	    -webkit-appearance: none;
	    font-size: 16px;
	    vertical-align: middle;
	    outline: none;
	}
	.search-box-container .btn{
		margin-left: 0;
	    border-left: 1px solid #ececec;
	    border-radius: 2px;
	    z-index: 0;
	    background: #26a2ff;
	    overflow: hidden;
	    line-height: 16px;
	    width: 83px;
	    text-align: center;
	    font-size: 16px;
	    padding: 15px 0;
	}
	.search-box-container .btn span{
		color: #fff;
	}
	#news-wrapper2{
		margin-top: 60px;
	}
	#news-wrapper2 ul{
		width: 100%;
		height: 100%;
	}
	#news-wrapper2 ul .new-wrapper{
		height: 50px;
		width: 100%;
		border:1px solid #e6e6e6;
		box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 1);
		margin:8px;
		padding: 8px;
	}
	#news-wrapper2 .new-wrapper h2{
        
	}
	#news-wrapper2 .new-wrapper span{
        float: right;
        margin-right: 4px;
	}
</style>
