package general;

public class SwapIntegersWithoutTemp {

	public static void main(String[] args) {
		int a = 20;
		int b = 30;

		System.out.println("====BEFORE====");
		System.out.println("a: " + a);
		System.out.println("b: " + b);

		a = a + b;
		b = a - b;
		a = a - b;

		System.out.println("====AFTER====");
		System.out.println("a: " + a);
		System.out.println("b: " + b);

	}
}
