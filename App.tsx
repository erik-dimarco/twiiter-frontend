import "react-native-gesture-handler";
import { TailwindProvider } from "tailwindcss-react-native";
import { ApolloProvider } from "@apollo/client";
import MainNav from "./src/navigation/MainNav";
import client from "./src/gql/client";
import { Provider } from "react-redux";
import store from "./src/redux/store";
export default function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <TailwindProvider>
          <MainNav />
        </TailwindProvider>
      </ApolloProvider>
    </Provider>
  );
}
