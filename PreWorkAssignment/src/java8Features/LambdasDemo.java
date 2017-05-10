package java8Features;

interface MathOperations {
	int operate(int a, int b);
}

interface GreetingService {
	public void sayMessage(String message);
}

public class LambdasDemo {

	private static int operate(int a, int b, MathOperations mathOperations) {
		return mathOperations.operate(a, b);
	}

	public static void main(String[] args) {
		MathOperations addition = (int a, int b) -> a + b;
		MathOperations subtraction = (a, b) -> a - b;
		MathOperations multiplication = (int a, int b) -> {
			return a * b;
		};
		MathOperations division = (int a, int b) -> a / b;

		System.out.println("Addition(100+20): " + operate(100, 20, addition));
		System.out.println("Subtraction(10-20): " + operate(100, 20, subtraction));
		System.out.println("Multiplication(100*20): " + operate(100, 20, multiplication));
		System.out.println("Division(100/20): " + operate(100, 20, division));

		GreetingService greetService1 = message -> System.out.println("Hello " + message);
		GreetingService greetService2 = (message) -> System.out.println("Hello " + message);

		greetService1.sayMessage("Bob");
		greetService2.sayMessage("Anna");

	}
}
