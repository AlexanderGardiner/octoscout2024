import os
import json
import csv

def is_json(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            json.load(file)
        return True
    except (ValueError, OSError):
        return False

def json_to_csv(directory_path, output_file):
    # Open CSV file in write mode
    with open(output_file, 'w', newline='', encoding='utf-8') as csv_file:
        csv_writer = csv.writer(csv_file)
        
        # Iterate through files in the directory
        for filename in os.listdir(directory_path):
            filepath = os.path.join(directory_path, filename)
            if is_json(filepath):
                # Open JSON file
                with open(filepath, 'r', encoding='utf-8') as json_file:
                    data = json.load(json_file)
                    
                    # Sort JSON keys alphabetically
                    sorted_keys = sorted(data.keys())
                    
                    # Write data to CSV
                    csv_writer.writerow([data[key] for key in sorted_keys])

# Directory containing files
directory_path = './JSONBackups'
# Output CSV file
output_file = 'output2.csv'

# Call function to convert JSON to CSV
json_to_csv(directory_path, output_file)

print("Conversion completed. Output CSV file:", output_file)
