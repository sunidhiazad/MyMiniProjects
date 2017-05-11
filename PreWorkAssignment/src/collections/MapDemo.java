package collections;

import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Spliterator;
import java.util.TreeMap;

public class MapDemo {
	Map<String, Integer> map;

	MapDemo() {
		map = new LinkedHashMap<>();
		map.put("Rihanna", 20);
		map.put("Justin Bieber", 10);
		map.put("Chris Martin", 30);
		map.put("Miley Cyrus", 50);
		map.put("Beyonce", 40);
		map.put("Taylor Swift", 60);
		map.put("Nicki Minaj", 70);
		map.put("Ariana Grande", 80);
		map.put("Nick Jonas", 90);
		map.put("The Weeknd", 100);
	}

	public void printMap() {
		Spliterator<Entry<String, Integer>> iterator = map.entrySet().spliterator();
		iterator.forEachRemaining(System.out::println);
	}

	public void sortMapOnKeys() {
		System.out.println("=========SORTED=========");
		TreeMap<String, Integer> sorted = new TreeMap<>(map);
		Spliterator<Entry<String, Integer>> iterator = sorted.entrySet().spliterator();
		iterator.forEachRemaining(System.out::println);
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void sortMapOnValues() {
		System.out.println("=========SORTED ON VALUES=========");
		List list = new LinkedList(map.entrySet());
		Collections.sort(list, (o1, o2) -> ((Comparable) ((Map.Entry) (o1)).getValue()).compareTo(((Map.Entry) (o2)).getValue()));
		Spliterator<Entry<String, Integer>> iterator = list.spliterator();
		iterator.forEachRemaining(System.out::println);
	}

	public static void main(String[] args) {
		MapDemo demo = new MapDemo();
		demo.printMap();
		demo.sortMapOnKeys();
		demo.sortMapOnValues();
	}
}
