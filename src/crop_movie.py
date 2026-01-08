import os
import subprocess
# ----------------- CONFIG -----------------
input_video = "/mnt/scratch-artemis/manos/data/movies-facts-and-fibs/MF2/test/6.mp4"  # Path to your MP4 file
timestamps = ["00:16:00-00:19:34", "00:31:24-00:37:15", "00:52:09-00:54:48","01:12:00-01:15:12"]  # List of timestamps
output_dir = "/mnt/data-poseidon/manos/projects/f3-project/website/mf2.io/public/movie_clips"  # Directory to save cropped videos
# ------------------------------------------

# Ensure output directory exists
os.makedirs(output_dir, exist_ok=True)

def timestamp_to_seconds(ts):
    """Convert HH:MM:SS or MM:SS to seconds"""
    parts = [int(p) for p in ts.split(":")]
    if len(parts) == 2:  # MM:SS
        return parts[0]*60 + parts[1]
    elif len(parts) == 3:  # HH:MM:SS
        return parts[0]*3600 + parts[1]*60 + parts[2]
    else:
        raise ValueError(f"Invalid timestamp: {ts}")

for idx, ts in enumerate(timestamps, start=1):
    start_str, end_str = ts.split("-")
    start = start_str.strip()
    end = end_str.strip()
    
    output_path = os.path.join(output_dir, f"{idx}.mp4")
    
    # Run ffmpeg command
    cmd = [
        "ffmpeg",
        "-y",  # overwrite if exists
        "-i", input_video,
        "-ss", start,
        "-to", end,
        "-c", "copy",  # no re-encoding, very fast
        output_path
    ]
    subprocess.run(cmd, check=True)
    print(f"Saved clip {idx} -> {output_path}")

print("All clips saved successfully!")