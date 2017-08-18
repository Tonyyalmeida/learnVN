import generalWordStore from "./generalWordStore"
import { default as Hi } from "./studySessionStore"

export default {
  generalWordStore: new generalWordStore(),
  studySessionStore: new Hi()
}