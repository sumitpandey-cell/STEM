// Firebase error handling utilities
import { FirebaseError } from 'firebase/app';

export const getFirebaseErrorMessage = (error: unknown): string => {
  if (error instanceof FirebaseError) {
    switch (error.code) {
      // Auth errors
      case 'auth/user-not-found':
        return 'No account found with this email address';
      case 'auth/wrong-password':
        return 'Incorrect password';
      case 'auth/invalid-email':
        return 'Invalid email address';
      case 'auth/user-disabled':
        return 'This account has been disabled';
      case 'auth/too-many-requests':
        return 'Too many failed attempts. Please try again later';
      case 'auth/network-request-failed':
        return 'Network error. Please check your internet connection';
      case 'auth/invalid-credential':
        return 'Invalid email or password';
      case 'auth/email-already-in-use':
        return 'An account with this email already exists';
      case 'auth/weak-password':
        return 'Password is too weak. Please use at least 6 characters';

      // Firestore errors
      case 'permission-denied':
        return 'You don\'t have permission to perform this action';
      case 'unavailable':
        return 'Service temporarily unavailable. Please try again';
      case 'deadline-exceeded':
        return 'Request timed out. Please check your connection';
      case 'not-found':
        return 'The requested document was not found';
      case 'already-exists':
        return 'Document already exists';
      case 'resource-exhausted':
        return 'Request quota exceeded. Please try again later';
      case 'failed-precondition':
        return 'Operation failed due to invalid state';
      case 'cancelled':
        return 'Operation was cancelled';
      case 'data-loss':
        return 'Data loss detected. Please contact support';
      case 'unauthenticated':
        return 'Please log in to continue';
      case 'invalid-argument':
        return 'Invalid request. Please check your input';
      case 'out-of-range':
        return 'Value is out of valid range';
      case 'unimplemented':
        return 'This feature is not implemented yet';
      case 'internal':
        return 'Internal server error. Please try again';
      case 'aborted':
        return 'Operation was aborted. Please try again';

      default:
        return error.message || 'An unexpected error occurred';
    }
  }

  if (error instanceof Error) {
    return error.message;
  }

  return 'An unexpected error occurred';
};

export const isFirebaseError = (error: unknown): error is FirebaseError => {
  return error instanceof FirebaseError;
};
