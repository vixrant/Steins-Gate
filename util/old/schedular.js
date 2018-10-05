module.exports = _ => {
  var schedule = require("node-schedule");
  var {
    User
  } = require("../models/user");
  var {
    SendPushMessage
  } = require("./fcmMessaging");

  schedule.scheduleJob("10 * * * * *", function () {
    let fcmTokens = ['fauZWzX9wVI:APA91bFy5790CUkGcv20PD2rk2wb6tbh0XlAELccyIyC0DOVNMUIkIlNuy3g7okuYZ9cVAAOyT3uWXiiYtTuqcXkMstzPfkoUeMOONvuVtamkAg95IIPz9jOGa2JfF-Qg-f9BlXuMWBW'];
    let notifications = [];

    User.find({})
      .select({
        fcmToken: 1
      })
      .exec(function (err, res) {
        notifications = res.map(e => e.fcmToken);
      });

    User.find({}).exec(function (err, res) {
      let today = new Date();
      res.forEach(u => {
        if ( u.DOB &&
          u.DOB.getDate() == today.getDate() &&
          u.DOB.getMonth == today.getMonth()
        ) {
          console.log(u.DOB);
          var notification = new Object();
          notification.title = "Birthday";
          notification.message = "Its " + u.name + " birthday. Wish him maybe.";
          notifications.push(notification);
          l//et tokens = fcmTokens.filter(t => t != u.fcmToken);
          SendPushMessage(fcmTokens, notification.title, notification.message);
        } else if ( u.aniversaryDate &&
          u.aniversaryDate.getDate() == today.getDate() &&
          u.aniversaryDate.getMonth == today.getMonth()
        ) {
          console.log(u.aniversaryDate);
          var notification = new Object();
          notification.title = "Aniversary";
          notification.message = "Its " + u.name + " Aniversary. Wish him maybe.";
          notifications.push(notification);
         // let tokens = fcmTokens.filter(t => t != u.fcmToken);
          SendPushMessage(fcmTokens, notification.title, notification.message);
        } else if ( u.joiningDate &&
          u.joiningDate.getDate() == today.getDate() &&
          u.joiningDate.getMonth == today.getMonth()
        ) {
          console.log(u.joiningDate)
          var notification = new Object();
          notification.title = "Work Aniversary";
          notification.message =
            "Its " + u.name + " Work Aniversary. Wish him maybe.";
          notifications.push(notification);
          //let tokens = fcmTokens.filter(t => t != u.fcmToken);
          SendPushMessage(fcmTokens, notification.title, notification.message);
        } else {
          console.log(u);
        }
      });
    });
  });
}