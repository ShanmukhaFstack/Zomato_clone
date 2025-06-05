// Callback Hell (Nested Callbacks — Hard to Read and Maintain)
// Callback hell happens when callbacks are nested within callbacks in a deeply layered structure, making code messy and difficult to follow.
//  1: User login → fetch profile → show dashboard
login("veera", (user) => {
  getProfile(user.id, (profile) => {
    getDashboard(profile.role, (dashboard) => {
      console.log("Loading dashboard:", dashboard);
    });
  });
});
// 2:Loading sequence (animation steps)
fadeIn(() => {
  moveRight(() => {
    scaleUp(() => {
      fadeOut(() => {
        console.log("Animation complete");
      });
    });
  });
});
// 3: Multi-step order processing
placeOrder((order) => {
  chargePayment(order, (payment) => {
    sendReceipt(payment, (receipt) => {
      notifyUser(receipt, () => {
        console.log("Order complete");
      });
    });
  });
});
// 4: Fetching nested API data
getUser((user) => {
  getPosts(user.id, (posts) => {
    getComments(posts[0].id, (comments) => {
      console.log("First comment:", comments[0]);
    });
  });
});