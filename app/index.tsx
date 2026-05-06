import { useRouter } from 'expo-router';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BirdIllustration from '@/components/bird-illustration';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Bird Illustration */}
        <View style={styles.imageContainer}>
          <BirdIllustration size={140} />
        </View>

        {/* Title & Subtitle */}
        <Text style={styles.title}>early bird.</Text>
        <Text style={styles.subtitle}>Your local discount mate</Text>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.signUpButton}
            onPress={() => router.push('/signup')}
          >
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => router.push('/login')}
          >
            <Text style={styles.loginButtonText}>Login →</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  imageContainer: {
    marginBottom: 32,
  },
  title: {
    fontSize: 42,
    fontWeight: '800',
    color: '#29B6F6',
    marginBottom: 8,
    letterSpacing: -1,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#333',
    marginBottom: 48,
  },
  buttonContainer: {
    width: '100%',
    gap: 12,
  },
  signUpButton: {
    backgroundColor: '#29B6F6',
    borderRadius: 32,
    paddingVertical: 16,
    alignItems: 'center',
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  loginButton: {
    backgroundColor: '#f5f5f5',
    borderRadius: 32,
    paddingVertical: 16,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#29B6F6',
    fontSize: 16,
    fontWeight: '600',
  },
});
