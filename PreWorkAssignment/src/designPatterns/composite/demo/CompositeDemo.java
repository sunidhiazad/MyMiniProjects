package designPatterns.composite.demo;

import java.util.ArrayList;
import java.util.List;

import designPatterns.composite.concrete.ConsoleMessageFormatter;
import designPatterns.composite.concrete.HtmlMessageFormatter;
import designPatterns.composite.concrete.TrimMessageFormatter;
import designPatterns.composite.concrete.UpperCaseMessageFormatter;
import designPatterns.composite.context.CompositeFormatter;
import designPatterns.composite.interfaces.MessageFormatter;

public class CompositeDemo {
	public static void main(String[] args) {
		List<MessageFormatter> formatters = new ArrayList<MessageFormatter>();
		formatters.add(new TrimMessageFormatter());
		formatters.add(new ConsoleMessageFormatter());
		formatters.add(new HtmlMessageFormatter());
		formatters.add(new UpperCaseMessageFormatter());
		
		CompositeFormatter composite = new CompositeFormatter(formatters);
		System.out.println(composite.format("      kubo       "));
	}
}
