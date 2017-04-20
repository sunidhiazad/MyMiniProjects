import java.util.Arrays;
import java.util.stream.IntStream;

public class Primes {
	static boolean isPrime(int n) {

		// check if n is a multiple of 2
		if (n % 2 == 0)
			return false;

		// if not, then just check the odds
		for (int i = 3; i <= Math.sqrt(n); i += 2) {
			if (n % i == 0)
				return false;
		}

		return true;
	}

	public static void main(String[] args) {
		int[] primes = IntStream.iterate(1, n -> n + 1).filter(Primes::isPrime).limit(20).toArray();
		System.out.println(Arrays.toString(primes));
	}
}
