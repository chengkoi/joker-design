import { makeInstaller } from "./makeInstaller";
import components  from "./components";
import "@joker-design/theme/index.css"

const installer = makeInstaller(components)

export * from '@joker-design/components'
export default installer;