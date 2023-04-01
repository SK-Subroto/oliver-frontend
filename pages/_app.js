import '@/styles/globals.css'

// redux
import { store } from "@/store/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <Provider store={store}>
      {
        getLayout(
          <Component {...pageProps} />
        )
      }
    </Provider>
  )
}
