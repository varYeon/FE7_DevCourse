// 이넘
// 연습문제+
// 감이 잘 안 잡힘

// 주어진 코드를 enum으로 리팩토링
{
  // 1.
  enum Day {
    MONDAY = 1,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY,
  }

  function getDayName(day: Day): string {
    if (day === Day.MONDAY) return "Monday";
    if (day === Day.TUESDAY) return "Tuesday";
    if (day === Day.WEDNESDAY) return "Wednesday";
    if (day === Day.THURSDAY) return "Thursday";
    if (day === Day.FRIDAY) return "Friday";
    if (day === Day.SATURDAY) return "Saturday";
    if (day === Day.SUNDAY) return "Sunday";
    return "Invalid day";
  }
}

{
  // 2.
  enum HttpStatus {
    SUCCESS = 200,
    NOT_FOUND = 404,
    INTERNAL_ERROR = 500,
  }

  function getStatusMessage(status: HttpStatus): string {
    if (status === HttpStatus.SUCCESS) return "Success";
    if (status === HttpStatus.NOT_FOUND) return "Not Found";
    if (status === HttpStatus.INTERNAL_ERROR) return "Internal Server Error";
    return "Unknown Status";
  }
}

{
  // 3. **
  enum City {
    SEOUL = "Seoul",
    BUSAN = "Busan",
    DAEGU = "Daegu",
  }

  function getCityByZip(zip: City): string {
    if (zip === City.SEOUL) return City.SEOUL;
    if (zip === City.BUSAN) return City.BUSAN;
    if (zip === City.DAEGU) return City.DAEGU;
    return "Unknown City";
  }
}

{
  // 4.
  enum Role {
    ADMIN = "admin",
    USER = "user",
    GUEST = "guest",
  }

  function getPermissionLevel(role: Role): string {
    if (role === Role.ADMIN) return "Full access";
    if (role === Role.USER) return "Limited access";
    if (role === Role.GUEST) return "Guest access";
    return "No access";
  }
}

{
  // 5.
  enum Status {
    PENDING = 1,
    SHIPPED,
    DELIVERED,
  }

  function getProductStatus(status: Status): string {
    if (status === Status.PENDING) return "Pending";
    if (status === Status.SHIPPED) return "Shipped";
    if (status === Status.DELIVERED) return "Delivered";
    return "Unknown Status";
  }
}

{
  // 6.
  enum Status {
    ORDER_PLACED = "Order Placed",
    PAYMENT_PENDING = "Payment Pending",
    SHIPPED = "Shipped",
    DELIVERED = "Delivered",
  }

  function getOrderStatus(status: Status): string {
    if (status === Status.ORDER_PLACED) return "Your order has been placed.";
    if (status === Status.PAYMENT_PENDING) return "Payment is pending.";
    if (status === Status.SHIPPED) return "Your order has been shipped.";
    if (status === Status.DELIVERED) return "Your order has been delivered.";
    return "Unknown Status";
  }
}

{
  // 7. ** 숫자/문자형이 아닌 경우
  enum Status {
    IS_ACTIVE = "true",
    IS_INACTIVE = "false",
  }

  function toggleStatus(status: Status): boolean {
    return status === Status.IS_ACTIVE ? true : false;
  }
}

{
  // 8.
  enum OptionValue {
    OPTION_ONE = "Option 1",
    OPTION_TWO = "Option 2",
    OPTION_THREE = "Option 3",
  }

  function getOptionValue(option: OptionValue): string {
    if (option === OptionValue.OPTION_ONE) return "You selected Option 1.";
    if (option === OptionValue.OPTION_TWO) return "You selected Option 2.";
    if (option === OptionValue.OPTION_THREE) return "You selected Option 3.";
    return "Invalid option";
  }
}

{
  // 9.
  enum MealTime {
    BREAKFAST = "Breakfast",
    LUNCH = "Lunch",
    DINNER = "Dinner",
  }

  function getMealTime(meal: MealTime): string {
    if (meal === MealTime.BREAKFAST)
      return "Good morning, it's breakfast time!";
    if (meal === MealTime.LUNCH) return "Good afternoon, it's lunch time!";
    if (meal === MealTime.DINNER) return "Good evening, it's dinner time!";
    return "Invalid meal time";
  }
}

{
  // 10. ** (7)
  enum Status {
    LOGGED_IN,
    LOGGED_OUT,
  }

  function checkLoginStatus(status: Status): string {
    if (status === Status.LOGGED_IN) return "You are logged in.";
    if (status === Status.LOGGED_OUT) return "You are logged out.";
    return "Unknown status";
  }

  console.log(checkLoginStatus(Status.LOGGED_IN));
  console.log(checkLoginStatus(Status.LOGGED_OUT));
}
{
  // 최신 트렌드 방법으로 바꿔보기
  const Status = {
    LOGGED_IN: "LOGGED_IN",
    LOGGED_OUT: "LOGGED_OUT",
  } as const;

  type Status = (typeof Status)[keyof typeof Status];

  function checkLoginStatus(status: Status): string {
    if (status === Status.LOGGED_IN) return "You are logged in.";
    if (status === Status.LOGGED_OUT) return "You are logged out.";
    return "Unknown status";
  }

  console.log(checkLoginStatus(Status.LOGGED_IN));
  console.log(checkLoginStatus(Status.LOGGED_OUT));
}
