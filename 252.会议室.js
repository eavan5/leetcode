var canAttendMeetings = function (intervals) {
	intervals.sort((a, b) => a[0] - b[0])
	for (let i = 0; i < intervals.length; i++) {
		const [f, s] = intervals[i]
		const [p_f, p_s] = intervals[i - 1]
		if (i > 0 && f > p_s) {
			return false
		}
	}
	return true
}
