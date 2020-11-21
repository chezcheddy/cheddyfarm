(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{101:function(e,a){},123:function(e,a){},125:function(e,a){},168:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(80),s=t.n(c),l=(t(93),t(1)),i=t.n(l),o=t(13),u=t(81),m=t(82),d=t(87),b=t(86),h=(t(95),t(3)),p=t.n(h),f=t(20),_=t(85),v=t(10),w=t.n(v),g={networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",bananaContractName:"berryclub.ek.near",contractName:"farm.berryclub.ek.near",walletUrl:"https://wallet.near.org"},E=r.a.createElement("span",{role:"img","aria-label":"avocado",className:"berry"},"\ud83e\udd51"),x=r.a.createElement("span",{role:"img","aria-label":"banana",className:"berry"},"\ud83c\udf4c"),N=r.a.createElement("span",{role:"img","aria-label":"cucumber",className:"berry"},"\ud83e\udd52"),B=r.a.createElement("span",{role:"img","aria-label":"near",className:"berry"},"\u24c3"),y="Avocado",S="Banana",k=function(e){Object(d.a)(t,e);var a=Object(b.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).state={connected:!1,signedIn:!1,accountId:null,account:null,claiming:!1,bananaNum:1},n._balanceRefreshTimer=null,n._initNear().then((function(){n.setState({connected:!0,signedIn:!!n._accountId,accountId:n._accountId})})),n}return Object(m.a)(t,[{key:"componentDidMount",value:function(){}},{key:"parseBananaAccount",value:function(e,a){return(e=e?{accountId:e.account_id,accountIndex:e.account_index,avocadoBalance:parseFloat(e.avocado_balance)/this._pixelCost,bananaBalance:parseFloat(e.banana_balance)/this._pixelCost,bananaBalanceBN:new p.a(e.banana_balance),numPixels:e.num_pixels,farmingPreference:e.farming_preference}:{accountId:a,accountIndex:-1,avocadoBalance:25,bananaBalance:0,bananaBalanceBN:new p.a(0),numPixels:0,farmingPreference:y}).startTime=(new Date).getTime(),e.avocadoPixels=e.farmingPreference===y?e.numPixels+1:0,e.bananaPixels=e.farmingPreference===S?e.numPixels:0,e.avocadoRewardPerMs=e.avocadoPixels/864e5,e.bananaRewardPerMs=e.bananaPixels/864e5,e.bananaRewardPerMsBN=e.bananaBalanceBN/new p.a(864e5),e}},{key:"getAccount",value:function(){var e=Object(o.a)(i.a.mark((function e(a,t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.next=3,this._bananaContract.get_account({account_id:a});case 3:return e.t1=e.sent,e.t2=a,n=e.t0.parseBananaAccount.call(e.t0,e.t1,e.t2),e.next=8,this._contract.get_account({account_id:a});case 8:return(r=e.sent)?Object.assign(n,{nearBalanceBn:new p.a(r.near_balance),cucumberBalanceBn:new p.a(r.cucumber_balance),nearClaimed:parseFloat(r.near_claimed)/Math.pow(10,24)}):Object.assign(n,{nearBalanceBn:new p.a(0),cucumberBalanceBn:new p.a(0),nearClaimed:0}),n.nearBalance=parseFloat(n.nearBalanceBn.toString())/Math.pow(10,24),n.cucumberBalance=parseFloat(n.cucumberBalanceBn.toString())/this._pixelCost,n.percent=100*n.cucumberBalance/t.totalSupply,e.abrupt("return",n);case 14:case"end":return e.stop()}}),e,this)})));return function(a,t){return e.apply(this,arguments)}}()},{key:"refreshStats",value:function(){var e=Object(o.a)(i.a.mark((function e(){var a,t,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=(new Date).getTime(),e.t0=parseFloat,e.next=4,this._bananaContract.get_last_reward_timestamp();case 4:return e.t1=e.sent,e.t2=(0,e.t0)(e.t1),t=e.t2/1e6,e.next=9,this._contract.get_stats();case 9:n=e.sent,r={totalSupplyBn:new p.a(n.total_cucumber_balance),totalSupply:parseFloat(n.total_cucumber_balance)/this._pixelCost,totalNearClaimed:parseFloat(n.total_near_claimed)/Math.pow(10,24),totalNearRewarded:parseFloat(n.total_near_received)/Math.pow(10,24),timeUntilRewards:1606019138008.9048-a,timeFromLastRewards:a-t},this.setState({stats:r});case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"refreshAccountStats",value:function(){var e=Object(o.a)(i.a.mark((function e(){var a,t=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.refreshStats();case 2:return e.next=4,this.getAccount(this._accountId,this.state.stats);case 4:a=e.sent,this._balanceRefreshTimer&&(clearInterval(this._balanceRefreshTimer),this._balanceRefreshTimer=null),this.setState({account:a}),this._balanceRefreshTimer=setInterval((function(){var e=(new Date).getTime()-a.startTime;t.setState({account:Object.assign({},a,{avocadoBalance:a.avocadoBalance+e*a.avocadoRewardPerMs,bananaBalance:a.bananaBalance+e*a.bananaRewardPerMs})})}),100);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_initNear",value:function(){var e=Object(o.a)(i.a.mark((function e(){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new f.keyStores.BrowserLocalStorageKeyStore,e.next=3,f.connect(Object.assign({deps:{keyStore:a}},g));case 3:return t=e.sent,this._keyStore=a,this._near=t,this._walletConnection=new f.WalletConnection(t,g.contractName),this._accountId=this._walletConnection.getAccountId(),this._account=this._walletConnection.account(),this._bananaContract=new f.Contract(this._account,g.bananaContractName,{viewMethods:["get_account","get_last_reward_timestamp","get_account_by_index","get_lines","get_line_versions","get_pixel_cost","get_account_balance","get_account_num_pixels","get_account_id_by_index"],changeMethods:["transfer_with_vault"]}),this._contract=new f.Contract(this._account,g.contractName,{viewMethods:["account_exists","get_account","get_stats","get_near_balance","get_total_near_claimed","get_total_near_received","get_balance","get_total_supply"],changeMethods:["claim_near","transfer_raw"]}),e.t0=p.a,e.next=14,this._bananaContract.get_pixel_cost();case 14:if(e.t1=e.sent,this._pixelCostBN=new e.t0(e.t1),this._pixelCost=parseFloat(this._pixelCostBN.toString()),!this._accountId){e.next=22;break}return e.next=20,this.refreshAccountStats();case 20:e.next=24;break;case 22:return e.next=24,this.refreshStats();case 24:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"requestSignIn",value:function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"Berry Farm",e.next=3,this._walletConnection.requestSignIn(g.contractName,"Berry Farm");case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"logOut",value:function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this._walletConnection.signOut(),this._accountId=null,this.setState({signedIn:!!this._accountId,accountId:this._accountId});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"stakeBananas",value:function(){var e=Object(o.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.refreshAccountStats();case 2:return a=a?new p.a(a)*this._pixelCostBN:this.state.account.bananaBalanceBN,e.next=5,this._bananaContract.transfer_with_vault({receiver_id:g.contractName,amount:a.toString(),payload:'"DepositAndStake"'},new p.a("50000000000000"),new p.a("1"));case 5:case"end":return e.stop()}}),e,this)})));return function(a){return e.apply(this,arguments)}}()},{key:"claimNear",value:function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({claiming:!0}),e.next=3,this._contract.claim_near();case 3:return e.next=5,this.refreshAccountStats();case 5:this.setState({claiming:!1});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state.account,t=this.state.connected?this.state.signedIn?r.a.createElement("div",null,r.a.createElement("div",{className:"float-right"},r.a.createElement("button",{className:"btn btn-outline-secondary",onClick:function(){return e.logOut()}},"Log out (",this.state.accountId,")")),r.a.createElement("div",null,a?r.a.createElement("div",{className:"lines"},r.a.createElement("h3",null,"Your Balances"),r.a.createElement("div",{className:"balances"},E," ",a.avocadoBalance.toFixed(3),a.avocadoPixels>0?r.a.createElement("span",null," (+",a.avocadoPixels,E,"/day)"):""),r.a.createElement("div",{className:"balances"},x," ",a.bananaBalance.toFixed(3),a.bananaPixels>0?r.a.createElement("span",null," (+",a.bananaPixels,x,"/day)"):""),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("span",{className:"balances label-for-swap"},x),r.a.createElement(_.a,{className:"balances swap-input",min:.001,max:this.state.account.bananaBalance,value:this.state.bananaNum,onChange:function(a){return e.setState({bananaNum:a})},enableMobileNumericKeyboard:!0}),r.a.createElement("button",{className:"btn-max balances",disabled:0===a.bananaBalance,onClick:function(){return e.setState({bananaNum:a.bananaBalance.toFixed(3)})}},"MAX"),r.a.createElement(C,{account:this.state.account,stakeBananas:function(a){return e.stakeBananas(a)},amount:this.state.bananaNum}))),r.a.createElement("div",{className:"balances"},N," ",a.cucumberBalance.toFixed(3)," (",a.percent.toFixed(3),"% share)"),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-success"+(a.nearBalance>0?" btn-large":" hidden"),disabled:this.state.claiming,onClick:function(){return e.claimNear()}},"Claim ",a.nearBalance.toFixed(3)," ",B)),r.a.createElement("div",{className:"balances"},"Earned ",B,(a.nearClaimed+a.nearBalance).toFixed(3))):"")):r.a.createElement("div",{style:{marginBottom:"10px"}},r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.requestSignIn()}},"Log in with NEAR Wallet")):r.a.createElement("div",null,"Connecting... ",r.a.createElement("span",{className:"spinner-grow spinner-grow-sm",role:"status","aria-hidden":"true"})),n=this.state.stats?r.a.createElement("div",null,this.state.stats.timeUntilRewards>0?r.a.createElement("div",null,r.a.createElement("h3",null,"Countdown until the first rewards"),r.a.createElement("div",{className:"timer"},r.a.createElement(w.a,{initialTime:this.state.stats.timeUntilRewards,direction:"backward",timeToUpdate:100,lastUnit:"h"},(function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a.Hours,null),":",r.a.createElement(w.a.Minutes,{formatValue:function(e){return"".concat(e).padStart(2,"0")}}),":",r.a.createElement(w.a.Seconds,{formatValue:function(e){return"".concat(e).padStart(2,"0")}}),".",r.a.createElement(w.a.Milliseconds,{formatValue:function(e){return"".concat(e).padStart(3,"0")}}))})))):r.a.createElement("div",null,r.a.createElement("h3",null,"Time from last reward"),r.a.createElement("div",{className:"timer small"},r.a.createElement(w.a,{initialTime:this.state.stats.timeFromLastRewards,direction:"forward",timeToUpdate:100,lastUnit:"h"},(function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a.Hours,null),":",r.a.createElement(w.a.Minutes,{formatValue:function(e){return"".concat(e).padStart(2,"0")}}),":",r.a.createElement(w.a.Seconds,{formatValue:function(e){return"".concat(e).padStart(2,"0")}}),".",r.a.createElement(w.a.Milliseconds,{formatValue:function(e){return"".concat(e).padStart(3,"0")}}))}))),"Use ",E," to draw on berry club to trigger ",B," rewards distribution."),r.a.createElement("h3",null,"Global Farming Stats"),r.a.createElement("div",{className:"lines"},r.a.createElement("div",null,r.a.createElement("span",{className:"label"},"Total ",N," Supplied"),r.a.createElement("span",{className:"balances"},this.state.stats.totalSupply.toFixed(3))),r.a.createElement("div",null,r.a.createElement("span",{className:"label"},"Total ",B," Rewarded"),r.a.createElement("span",{className:"balances"},this.state.stats.totalNearRewarded.toFixed(3))),r.a.createElement("div",null,r.a.createElement("span",{className:"label"},"Total ",B," Claimed"),r.a.createElement("span",{className:"balances"},this.state.stats.totalNearClaimed.toFixed(3))))):"";return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h2",null,"Berry Farm ",N),r.a.createElement("a",{className:"btn btn-outline-none",href:"https://berryclub.io"},E," Berry Club ",x)),r.a.createElement("div",{className:"call-to-action"},"Swap ",x," to stake ",N," to farm ",B),t,n,r.a.createElement("div",null))))}}]),t}(r.a.Component),C=function(e){return r.a.createElement("button",{className:"btn btn-large"+(0===e.amount?" btn-success":""),disabled:e.account.bananaBalance<e.amount,onClick:function(){return e.stakeBananas(e.amount)}},"Swap ",r.a.createElement("span",{className:"font-weight-bold"},e.amount||"",e.amount?"":"ALL",x)," to ",r.a.createElement("span",{className:"font-weight-bold"},N))},F=k;s.a.render(r.a.createElement(F,null),document.getElementById("root"))},88:function(e,a,t){e.exports=t(168)},93:function(e,a,t){},95:function(e,a,t){},96:function(e,a){}},[[88,1,2]]]);
//# sourceMappingURL=main.ffc911f5.chunk.js.map