export const correctEmail = (value: string) => {
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    return true
  }
  return false
}

export const checkNumberPhone = (number: string) => {
  if (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(number)) {
    return true
  }
  return false
}

export const onScrollBottom = (callBack: Function) => {
  window.onscroll = function (event) {
    if (window.innerHeight + window.scrollY > document.body.offsetHeight) {
      callBack(event)
    }
  }
}

// export function useRouter() {
//   const params = useParams()
//   const location = useLocation()
//   const history = useHistory()
//   const match = useRouteMatch()

//   // Return our custom router object
//   // Memoize so that a new object is only returned if something changes
//   return useMemo(() => {
//     return {
//       // For convenience add push(), replace(), pathname at top level
//       push: history.push,
//       replace: history.replace,
//       pathname: location.pathname,
//       // Merge params and parsed query string into single "query" object
//       // so that they can be used interchangeably.
//       // Example: /:topic?sort=popular -> { topic: "react", sort: "popular" }
//       query: {
//         ...queryString.parse(location.search), // Convert string to object
//         ...params,
//       },
//       // Include match, location, history objects so we have
//       // access to extra React Router functionality if needed.
//       match,
//       location,
//       history,
//     }
//   }, [params, match, location, history])
// }

export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) //The maximum is exclusive and the minimum is inclusive
}

export function isValidHttpUrl(string: string) {
  let url

  try {
    url = new URL(string)
  } catch (_) {
    return false
  }
  return url.protocol === "http:" || url.protocol === "https:"
}

export const spliceArray = (arr: Array<any>, start: number, end: number) => {
  return [...arr].splice(start, end)
}

// hàm định dạng tiền việt nam
// export function formatMoneyVND(num: string) {
//   return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
// }
export const FormatNumber = (money: number, separator = ",") => {
  if (!money) return "0"
  return (money + "").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + separator)
}

export const formatNumberDec = (
  nStr: string,
  decSeparate: string,
  groupSeparate: string
) => {
  nStr += ""
  let x = nStr.split(decSeparate)
  let x1 = x[0]
  let x2 = x.length > 1 ? "." + x[1] : ""
  let rgx = /(\d+)(\d{3})/
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, "$1" + groupSeparate + "$2")
  }
  return x1 + x2
}
// hàm định dạng tiền việt nam

export function formatMoneyVND(num: number | string) {
  if (typeof num == "number") {
    num = Math.floor(num)
    return `${num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")} VND`
  } else if (typeof num == "string") {
    return `${num.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")} VND`
  }
}

// export const getCookie = (cname: string) => {
//   var name = cname + "="
//   var decodedCookie = decodeURIComponent(document.cookie)
//   if (decodedCookie == null || decodedCookie == "") {
//     return ""
//   }
//   const cookieValue = decodedCookie
//     .split("; ")
//     .find((row) => row.startsWith(name))
//     .split("=")[1]
//   return cookieValue || ""
// }

export function formatNumberInput(value: string, separator = ",") {
  value += ""
  const list = value.split(".")
  const prefix = list[0].charAt(0) === "-" ? "-" : ""
  let num = prefix ? list[0].slice(1) : list[0]
  let result = ""
  while (num.length > 3) {
    result = `${separator}${num.slice(-3)}${result}`
    num = num.slice(0, num.length - 3)
  }
  if (num) {
    result = num + result
  }
  return `${prefix}${result}${list[1] ? `.${list[1]}` : ""}`
}

export const toFirstUpperCase = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const toFirstLowerCase = (string: string) => {
  return string.charAt(0).toLowerCase() + string.slice(1)
}

export function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}
