package general;

public class BoxingDemo {
	private int idef;
	private float fdef;
	private double ddef;
	private long ldef;
	private char cdef;
	private boolean bodef;
	private short sdef;
	private byte bydef;

	public void printDefaultValues() {
		System.out.println("default int: " + idef);
		System.out.println("default float: " + fdef);
		System.out.println("default double: " + ddef);
		System.out.println("default long: " + ldef);
		System.out.println("default char: " + cdef);
		System.out.println("default boolean: " + bodef);
		System.out.println("default short: " + sdef);
		System.out.println("default byte: " + bydef);
	}

	private void printValues() {
		int i = 10;
		float f = 10.0f;
		double d = 9.87d;
		long l = 120000L;
		char c = 'a';
		boolean bo = true;
		short s = 12;
		byte by = 'A';
		System.out.println("int: " + i);
		System.out.println("float: " + f);
		System.out.println("double: " + d);
		System.out.println("long: " + l);
		System.out.println("char: " + c);
		System.out.println("boolean: " + bo);
		System.out.println("short: " + s);
		System.out.println("byte: " + by);
	}

	public static void main(String[] args) {
		BoxingDemo demo = new BoxingDemo();
		demo.printDefaultValues();
		demo.printValues();
		demo.primitiveCastingFromInt();

	}

	private void primitiveCastingFromInt() {
		int i = 109;
		float f = i;
		long l = i;
		short s = (short) i;
		byte by = (byte) i;
		double d = i;
		System.out.println("int to float");
		System.out.println("int: " + i + " float: " + f);
		System.out.println("int to long");
		System.out.println("int: " + i + " long: " + l);
		System.out.println("int to short");
		System.out.println("int: " + i + " short: " + s);
		System.out.println("int to byte");
		System.out.println("int: " + i + " byte: " + by);
		System.out.println("int to double");
		System.out.println("int: " + i + " double: " + d);

	}

}
