package propulsion;
import java.math.BigInteger;
import java.util.stream.IntStream;

public class Factorial {

	static int recursiveFactorial(int n) {
		if (n <= 1)
			return 1;
		else
			return n * recursiveFactorial(n - 1);

	}

	static int iterativeFactorial(int n) {
		if (n <= 1)
			return 1;

		int factorial = 1;

		for (int i = 2; i <= n; i++) {
			factorial = i * factorial;
		}

		return factorial;
	}

	static BigInteger recursiveBIFactorial(BigInteger n) {
		BigInteger big=new BigInteger("1");
		if (n.intValue() <= 1)
			return big;
		else{
			
			return n.multiply(recursiveBIFactorial(n.subtract(new BigInteger("1"))));
		}
			

	}
	
	public static void main(String... args) {
		System.out.println("Recursive: Using normal java: ");
		for (int i = 0; i < 6; i++) {
			System.out.println(i + " : " + recursiveFactorial(i));
		}
		System.out.println("Iterative: Using normal java: ");
		for (int i = 0; i < 6; i++) {
			System.out.println(i + " : " + iterativeFactorial(i));
		}
		System.out.println("Recursive: Using lambdas: ");
		IntStream.rangeClosed(0, 5).forEach(n -> print(n));
		
		System.out.println("17!"+ " : " + recursiveBIFactorial(new BigInteger("50")));
	}

	private static void print(int n) {
		System.out.println(n + "! = " + recursiveFactorial(n));
	}

}