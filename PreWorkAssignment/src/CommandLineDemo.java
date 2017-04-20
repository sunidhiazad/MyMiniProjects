public class CommandLineDemo {

	public static void main(String[] args) {
		if (args.length == 0) {
			System.out.println("Hello, Unknown!");
		} else {
			for (int i = 0; i < args.length; i++) {
				System.out.println("Hello, " + args[i] + "!");
			}
		}
	}
}