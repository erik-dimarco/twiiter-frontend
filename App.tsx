import "react-native-gesture-handler";
import { TailwindProvider } from "tailwindcss-react-native";
import { Register } from "./src/screens";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import MainNav from "./src/navigation/MainNav";
import AuthStack from "./src/navigation/AuthStack";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/hooks/useAuth";

// Initialize ApolloClient
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <TailwindProvider>
          <MainNav />
        </TailwindProvider>
      </AuthProvider>
    </ApolloProvider>
  );
}
