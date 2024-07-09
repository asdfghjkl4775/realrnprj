import React from 'react';
import { Button, View, StyleSheet, SafeAreaView, Text } from 'react-native';
import { Amplify } from 'aws-amplify';
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react-native";

import configure from './src/aws-exports';
import LoggedInScreen from './src/components/LoggedInScreen';

Amplify.configure(configure);

const SignOutButton = () => {
  const { signOut } = useAuthenticator();

  return (
    <View style={styles.signOutButton}>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
};

const App = () => {
  return (
    <Authenticator.Provider>
      <Authenticator>
        <SafeAreaView>
          <LoggedInScreen />
          <SignOutButton />
        </SafeAreaView>
      </Authenticator>
    </Authenticator.Provider>
  );
};

const styles = StyleSheet.create({
  signOutButton: {
    alignSelf: "flex-end",
  },
});

export default App;
