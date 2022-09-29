function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  let counter = makeCounter();

  console.log(counter())
  console.log(counter())
  console.log(counter())
  console.log(counter())
  console.log(counter())

  /* 
-a----      2022-09-01  오전 11:19          12708 AccuComponentList.vue
-a----      2022-08-29   오후 5:55            447 AccuInsightCopyrightFooter.vue
-a----      2022-09-26   오후 6:25          47534 AccuInsightSiteHeader.vue
-a----      2022-08-29   오후 5:55           4295 ApolloExample.vue
-a----      2022-09-05   오전 9:55           2264 CommonFilters.ts
  */