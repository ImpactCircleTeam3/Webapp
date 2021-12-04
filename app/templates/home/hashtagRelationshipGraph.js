$.ajax({
  url: '/api/get-hashtag-hashtag-relation-graph',
  success: function (data){

  }
})


const classes = [{"name":"flare.analytics.cluster.AgglomerativeCluster","size":1,"imports":["flare.animate.Transitioner","flare.vis.data.DataList","flare.util.math.IMatrix","flare.analytics.cluster.MergeEdge","flare.analytics.cluster.HierarchicalCluster","flare.vis.data.Data"]},
{"name":"flare.analytics.cluster.CommunityStructure","size":1,"imports":["flare.analytics.cluster.HierarchicalCluster","flare.animate.Transitioner","flare.vis.data.DataList","flare.analytics.cluster.MergeEdge","flare.util.math.IMatrix"]},
{"name":"flare.analytics.cluster.HierarchicalCluster","size":1,"imports":["flare.vis.data.EdgeSprite","flare.vis.data.NodeSprite","flare.vis.data.DataList","flare.vis.data.Tree","flare.util.Arrays","flare.analytics.cluster.MergeEdge","flare.util.Sort","flare.vis.operator.Operator","flare.util.Property","flare.vis.data.Data"]},
{"name":"flare.analytics.cluster.MergeEdge","size":1,"imports":[]},
{"name":"flare.analytics.graph.BetweennessCentrality","size":1,"imports":["flare.animate.Transitioner","flare.vis.data.NodeSprite","flare.vis.data.DataList","flare.util.Arrays","flare.vis.data.Data","flare.util.Property","flare.vis.operator.Operator"]},
{"name":"flare.analytics.graph.LinkDistance","size":1,"imports":["flare.animate.Transitioner","flare.vis.data.NodeSprite","flare.vis.data.EdgeSprite","flare.analytics.graph.ShortestPaths","flare.vis.data.Data","flare.util.Property","flare.vis.operator.Operator"]},
{"name":"flare.analytics.graph.MaxFlowMinCut","size":1,"imports":["flare.animate.Transitioner","flare.vis.data.NodeSprite","flare.vis.data.EdgeSprite","flare.vis.data.Data","flare.util.Property","flare.vis.operator.Operator"]},
{"name":"flare.analytics.graph.ShortestPaths","size":1,"imports":["flare.vis.data.EdgeSprite","flare.vis.data.NodeSprite","flare.animate.Transitioner","flare.vis.operator.Operator","flare.util.heap.HeapNode","flare.util.heap.FibonacciHeap","flare.util.Property","flare.vis.data.Data"]},
{"name":"flare.analytics.graph.SpanningTree","size":1,"imports":["flare.animate.Transitioner","flare.vis.data.NodeSprite","flare.vis.operator.IOperator","flare.vis.Visualization","flare.vis.data.TreeBuilder","flare.vis.operator.Operator"]},
{"name":"flare.analytics.optimization.AspectRatioBanker","size":1,"imports":["flare.animate.Transitioner","flare.util.Arrays","flare.vis.data.DataSprite","flare.scale.Scale","flare.vis.axis.CartesianAxes","flare.vis.Visualization","flare.util.Property","flare.vis.operator.Operator"]},
{"name":"flare.animate.Easing","size":1,"imports":["flare.animate.Transition"]},
{"name":"flare.animate.FunctionSequence","size":1,"imports":["flare.util.Maths","flare.animate.Transition","flare.util.Arrays","flare.animate.Sequence","flare.animate.Transitioner"]},
{"name":"flare.animate.interpolate.ArrayInterpolator","size":1,"imports":["flare.util.Arrays","flare.animate.interpolate.Interpolator"]},
{"name":"flare.animate.interpolate.ColorInterpolator","size":1,"imports":["flare.animate.interpolate.Interpolator"]},
{"name":"flare.animate.interpolate.DateInterpolator","size":1,"imports":["flare.animate.interpolate.Interpolator"]},
{"name":"flare.animate.interpolate.Interpolator","size":1,"imports":["flare.animate.interpolate.NumberInterpolator","flare.animate.interpolate.ColorInterpolator","flare.animate.interpolate.PointInterpolator","flare.animate.interpolate.ObjectInterpolator","flare.animate.interpolate.MatrixInterpolator","flare.animate.interpolate.RectangleInterpolator","flare.animate.interpolate.DateInterpolator","flare.util.Property","flare.animate.interpolate.ArrayInterpolator"]},
{"name":"flare.animate.interpolate.MatrixInterpolator","size":1,"imports":["flare.animate.interpolate.Interpolator"]},
{"name":"flare.animate.interpolate.NumberInterpolator","size":1,"imports":["flare.animate.interpolate.Interpolator"]},
{"name":"flare.animate.interpolate.ObjectInterpolator","size":1,"imports":["flare.animate.interpolate.Interpolator"]},
{"name":"flare.animate.interpolate.PointInterpolator","size":1,"imports":["flare.animate.interpolate.Interpolator"]},
{"name":"flare.animate.interpolate.RectangleInterpolator","size":1,"imports":["flare.animate.interpolate.Interpolator"]},
{"name":"flare.animate.ISchedulable","size":1,"imports":["flare.animate.Scheduler"]},
{"name":"flare.animate.Parallel","size":1,"imports":["flare.animate.Easing","flare.animate.Transition","flare.util.Arrays"]},
{"name":"flare.animate.Pause","size":1,"imports":["flare.animate.Transition"]},
{"name":"flare.animate.Scheduler","size":1,"imports":["flare.animate.ISchedulable","flare.animate.Pause","flare.animate.Transition"]},
{"name":"flare.animate.Sequence","size":1,"imports":["flare.animate.Easing","flare.util.Maths","flare.animate.Transition","flare.util.Arrays"]},
{"name":"flare.animate.Transition","size":1,"imports":["flare.animate.Transitioner","flare.animate.TransitionEvent","flare.animate.Scheduler","flare.animate.Pause","flare.animate.Parallel","flare.animate.Easing","flare.animate.Sequence","flare.animate.ISchedulable","flare.util.Maths","flare.animate.Tween"]},
{"name":"flare.animate.Transitioner","size":1,"imports":["flare.util.IValueProxy","flare.animate.Parallel","flare.animate.Easing","flare.animate.Sequence","flare.animate.Transition","flare.animate.Tween","flare.util.Property"]},
{"name":"flare.animate.TransitionEvent","size":1,"imports":["flare.animate.Transition"]},
{"name":"flare.animate.Tween","size":1,"imports":["flare.animate.Transitioner","flare.animate.Transition","flare.animate.interpolate.Interpolator","flare.util.Property"]},
{"name":"flare.data.converters.Converters","size":1,"imports":["flare.data.converters.IDataConverter","flare.data.converters.GraphMLConverter","flare.data.converters.JSONConverter","flare.data.converters.DelimitedTextConverter"]},
{"name":"flare.data.converters.DelimitedTextConverter","size":1,"imports":["flare.data.DataSet","flare.data.DataUtil","flare.data.DataTable","flare.data.converters.IDataConverter","flare.data.DataSchema","flare.data.DataField"]},
{"name":"flare.data.converters.GraphMLConverter","size":1,"imports":["flare.data.DataSet","flare.data.DataUtil","flare.data.DataTable","flare.data.converters.IDataConverter","flare.data.DataSchema","flare.data.DataField"]},
{"name":"flare.data.converters.IDataConverter","size":1,"imports":["flare.data.DataSet","flare.data.DataSchema"]},
{"name":"flare.data.converters.JSONConverter","size":1,"imports":["flare.data.DataSet","flare.data.DataUtil","flare.data.DataTable","flare.data.converters.IDataConverter","flare.data.DataSchema","flare.data.DataField","flare.util.Property"]},
{"name":"flare.data.DataField","size":1,"imports":["flare.data.DataUtil"]},
{"name":"flare.data.DataSchema","size":1,"imports":["flare.data.DataField","flare.util.Arrays"]},
{"name":"flare.data.DataSet","size":1,"imports":["flare.data.DataTable"]},
{"name":"flare.data.DataSource","size":1,"imports":["flare.data.converters.IDataConverter","flare.data.converters.Converters","flare.data.DataSchema"]},
{"name":"flare.data.DataTable","size":1,"imports":["flare.data.DataSchema"]},
{"name":"flare.data.DataUtil","size":1,"imports":["flare.data.DataField","flare.data.DataSchema"]},
{"name":"flare.display.DirtySprite","size":1,"imports":[]},
{"name":"flare.display.LineSprite","size":1,"imports":["flare.display.DirtySprite"]},
{"name":"flare.display.RectSprite","size":1,"imports":["flare.util.Colors","flare.display.DirtySprite"]},
{"name":"flare.display.TextSprite","size":1,"imports":["flare.display.DirtySprite"]},
{"name":"flare.flex.FlareVis","size":1,"imports":["flare.display.DirtySprite","flare.data.DataSet","flare.vis.Visualization","flare.vis.axis.CartesianAxes","flare.vis.axis.Axes","flare.vis.data.Data"]},
{"name":"flare.physics.DragForce","size":1,"imports":["flare.physics.Simulation","flare.physics.Particle","flare.physics.IForce"]},
{"name":"flare.physics.GravityForce","size":1,"imports":["flare.physics.Simulation","flare.physics.Particle","flare.physics.IForce"]},
{"name":"flare.physics.IForce","size":1,"imports":["flare.physics.Simulation"]},
{"name":"flare.physics.NBodyForce","size":1,"imports":["flare.physics.Simulation","flare.physics.Particle","flare.physics.IForce"]},
{"name":"flare.physics.Particle","size":1,"imports":[]},
{"name":"flare.physics.Simulation","size":1,"imports":["flare.physics.Particle","flare.physics.NBodyForce","flare.physics.DragForce","flare.physics.GravityForce","flare.physics.Spring","flare.physics.SpringForce","flare.physics.IForce"]},
{"name":"flare.physics.Spring","size":1,"imports":["flare.physics.Particle"]},
{"name":"flare.physics.SpringForce","size":1,"imports":["flare.physics.Simulation","flare.physics.Particle","flare.physics.Spring","flare.physics.IForce"]},
{"name":"flare.query.AggregateExpression","size":1,"imports":["flare.query.Expression"]},
{"name":"flare.query.And","size":1,"imports":["flare.query.CompositeExpression","flare.query.Expression"]},
{"name":"flare.query.Arithmetic","size":1,"imports":["flare.query.BinaryExpression","flare.query.Expression"]},
{"name":"flare.query.Average","size":1,"imports":["flare.query.Expression","flare.query.AggregateExpression"]},
{"name":"flare.query.BinaryExpression","size":1,"imports":["flare.query.Expression"]},
{"name":"flare.query.Comparison","size":1,"imports":["flare.query.Not","flare.query.BinaryExpression","flare.query.Expression","flare.query.Or"]},
{"name":"flare.query.CompositeExpression","size":1,"imports":["flare.query.Expression","flare.query.If"]},
{"name":"flare.query.Count","size":1,"imports":["flare.query.Expression","flare.query.AggregateExpression"]},
{"name":"flare.query.DateUtil","size":1,"imports":["flare.query.Fn"]},
{"name":"flare.query.Distinct","size":1,"imports":["flare.query.Expression","flare.query.AggregateExpression"]},
{"name":"flare.query.Expression","size":1,"imports":["flare.query.Variable","flare.query.IsA","flare.query.ExpressionIterator","flare.util.IPredicate","flare.query.Literal","flare.util.IEvaluable","flare.query.If"]},
{"name":"flare.query.ExpressionIterator","size":1,"imports":["flare.query.Expression"]},
{"name":"flare.query.Fn","size":1,"imports":["flare.query.DateUtil","flare.query.CompositeExpression","flare.query.Expression","flare.query.StringUtil"]},
{"name":"flare.query.If","size":1,"imports":["flare.query.Expression"]},
{"name":"flare.query.IsA","size":1,"imports":["flare.query.Expression","flare.query.If"]},
{"name":"flare.query.Literal","size":1,"imports":["flare.query.Expression"]},
{"name":"flare.query.Match","size":1,"imports":["flare.query.BinaryExpression","flare.query.Expression","flare.query.StringUtil"]},
{"name":"flare.query.Maximum","size":1,"imports":["flare.query.Expression","flare.query.AggregateExpression"]},
{"name":"flare.query.methods.add","size":1,"imports":["flare.query.methods.or","flare.query.Arithmetic"]},
{"name":"flare.query.methods.and","size":1,"imports":["flare.query.And","flare.query.methods.or"]},
{"name":"flare.query.methods.average","size":1,"imports":["flare.query.Average","flare.query.methods.or"]},
{"name":"flare.query.methods.count","size":1,"imports":["flare.query.Count","flare.query.methods.or"]},
{"name":"flare.query.methods.distinct","size":1,"imports":["flare.query.Distinct","flare.query.methods.or"]},
{"name":"flare.query.methods.div","size":1,"imports":["flare.query.methods.or","flare.query.Arithmetic"]},
{"name":"flare.query.methods.eq","size":1,"imports":["flare.query.Comparison","flare.query.methods.or"]},
{"name":"flare.query.methods.fn","size":1,"imports":["flare.query.methods.or","flare.query.Fn"]},
{"name":"flare.query.methods.gt","size":1,"imports":["flare.query.Comparison","flare.query.methods.or"]},
{"name":"flare.query.methods.gte","size":1,"imports":["flare.query.Comparison","flare.query.methods.gt","flare.query.methods.eq","flare.query.methods.or"]},
{"name":"flare.query.methods.iff","size":1,"imports":["flare.query.methods.or","flare.query.If"]},
{"name":"flare.query.methods.isa","size":1,"imports":["flare.query.IsA","flare.query.methods.or"]},
{"name":"flare.query.methods.lt","size":1,"imports":["flare.query.Comparison","flare.query.methods.or"]},
{"name":"flare.query.methods.lte","size":1,"imports":["flare.query.Comparison","flare.query.methods.lt","flare.query.methods.eq","flare.query.methods.or"]},
{"name":"flare.query.methods.max","size":1,"imports":["flare.query.Maximum","flare.query.methods.or"]},
{"name":"flare.query.methods.min","size":1,"imports":["flare.query.Minimum","flare.query.methods.or"]},
{"name":"flare.query.methods.mod","size":1,"imports":["flare.query.methods.or","flare.query.Arithmetic"]},
{"name":"flare.query.methods.mul","size":1,"imports":["flare.query.methods.lt","flare.query.methods.or","flare.query.Arithmetic"]},
{"name":"flare.query.methods.neq","size":1,"imports":["flare.query.Comparison","flare.query.methods.eq","flare.query.methods.or"]},
{"name":"flare.query.methods.not","size":1,"imports":["flare.query.Not","flare.query.methods.or"]},
{"name":"flare.query.methods.or","size":1,"imports":["flare.query.Or"]},
{"name":"flare.query.methods.orderby","size":1,"imports":["flare.query.Query","flare.query.methods.or"]},
{"name":"flare.query.methods.range","size":1,"imports":["flare.query.methods.max","flare.query.Range","flare.query.methods.or","flare.query.methods.min"]},
{"name":"flare.query.methods.select","size":1,"imports":["flare.query.Query"]},
{"name":"flare.query.methods.stddev","size":1,"imports":["flare.query.methods.and","flare.query.Variance","flare.query.methods.or"]},
{"name":"flare.query.methods.sub","size":1,"imports":["flare.query.methods.or","flare.query.Arithmetic"]},
{"name":"flare.query.methods.sum","size":1,"imports":["flare.query.Sum","flare.query.methods.or"]},
{"name":"flare.query.methods.update","size":1,"imports":["flare.query.Query"]},
{"name":"flare.query.methods.variance","size":1,"imports":["flare.query.Variance","flare.query.methods.or"]},
{"name":"flare.query.methods.where","size":1,"imports":["flare.query.Query","flare.query.methods.lt","flare.query.methods.lte"]},
{"name":"flare.query.methods.xor","size":1,"imports":["flare.query.Xor","flare.query.methods.or"]},
{"name":"flare.query.methods._","size":1,"imports":["flare.query.Literal","flare.query.methods.or"]},
{"name":"flare.query.Minimum","size":1,"imports":["flare.query.Expression","flare.query.AggregateExpression"]},
{"name":"flare.query.Not","size":1,"imports":["flare.query.Expression"]},
{"name":"flare.query.Or","size":1,"imports":["flare.query.CompositeExpression","flare.query.Expression"]},
{"name":"flare.query.Query","size":1,"imports":["flare.query.Variable","flare.query.Sum","flare.query.Expression","flare.util.Sort","flare.query.Not","flare.query.AggregateExpression","flare.query.Literal","flare.util.Filter","flare.util.Property","flare.query.If"]},
{"name":"flare.query.Range","size":1,"imports":["flare.query.And","flare.query.Comparison","flare.query.Expression"]},
{"name":"flare.query.StringUtil","size":1,"imports":["flare.query.Fn"]},
{"name":"flare.query.Sum","size":1,"imports":["flare.query.Expression","flare.query.AggregateExpression"]},
{"name":"flare.query.Variable","size":1,"imports":["flare.query.Expression","flare.util.Property"]},
{"name":"flare.query.Variance","size":1,"imports":["flare.query.Expression","flare.query.AggregateExpression"]},
{"name":"flare.query.Xor","size":1,"imports":["flare.query.CompositeExpression","flare.query.Expression"]},
{"name":"flare.scale.IScaleMap","size":1,"imports":["flare.scale.Scale"]},
{"name":"flare.scale.LinearScale","size":1,"imports":["flare.util.Maths","flare.util.Strings","flare.scale.Scale","flare.scale.QuantitativeScale","flare.scale.ScaleType"]},
{"name":"flare.scale.LogScale","size":1,"imports":["flare.util.Maths","flare.util.Strings","flare.scale.Scale","flare.scale.QuantitativeScale","flare.scale.ScaleType"]},
{"name":"flare.scale.OrdinalScale","size":1,"imports":["flare.scale.ScaleType","flare.util.Arrays","flare.scale.Scale"]},
{"name":"flare.scale.QuantileScale","size":1,"imports":["flare.util.Maths","flare.util.Strings","flare.scale.Scale","flare.scale.ScaleType"]},
{"name":"flare.scale.QuantitativeScale","size":1,"imports":["flare.util.Maths","flare.util.Strings","flare.scale.Scale"]},
{"name":"flare.scale.RootScale","size":1,"imports":["flare.util.Maths","flare.util.Strings","flare.scale.Scale","flare.scale.QuantitativeScale","flare.scale.ScaleType"]},
{"name":"flare.scale.Scale","size":1,"imports":["flare.scale.ScaleType","flare.util.Strings"]},
{"name":"flare.scale.ScaleType","size":1,"imports":["flare.scale.Scale"]},
{"name":"flare.scale.TimeScale","size":1,"imports":["flare.util.Maths","flare.util.Dates","flare.scale.Scale","flare.scale.ScaleType"]},
{"name":"flare.util.Arrays","size":1,"imports":["flare.util.IValueProxy","flare.util.Property","flare.util.IEvaluable"]},
{"name":"flare.util.Colors","size":1,"imports":["flare.util.Filter"]},
{"name":"flare.util.Dates","size":1,"imports":["flare.util.Maths"]},
{"name":"flare.util.Displays","size":1,"imports":["flare.util.IValueProxy","flare.util.Filter","flare.util.Property","flare.util.IEvaluable","flare.util.Sort"]},
{"name":"flare.util.Filter","size":1,"imports":["flare.util.IPredicate","flare.util.Property"]},
{"name":"flare.util.Geometry","size":1,"imports":[]},
{"name":"flare.util.heap.FibonacciHeap","size":1,"imports":["flare.util.heap.HeapNode"]},
{"name":"flare.util.heap.HeapNode","size":1,"imports":["flare.util.heap.FibonacciHeap"]},
{"name":"flare.util.IEvaluable","size":1,"imports":[]},
{"name":"flare.util.IPredicate","size":1,"imports":[]},
{"name":"flare.util.IValueProxy","size":1,"imports":[]},
{"name":"flare.util.math.DenseMatrix","size":1,"imports":["flare.util.math.IMatrix"]},
{"name":"flare.util.math.IMatrix","size":1,"imports":[]},
{"name":"flare.util.math.SparseMatrix","size":1,"imports":["flare.util.math.IMatrix"]},
{"name":"flare.util.Maths","size":1,"imports":["flare.util.Arrays"]},
{"name":"flare.util.Orientation","size":1,"imports":[]},
{"name":"flare.util.palette.ColorPalette","size":1,"imports":["flare.util.palette.Palette","flare.util.Colors"]},
{"name":"flare.util.palette.Palette","size":1,"imports":[]},
{"name":"flare.util.palette.ShapePalette","size":1,"imports":["flare.util.palette.Palette","flare.util.Shapes"]},
{"name":"flare.util.palette.SizePalette","size":1,"imports":["flare.util.palette.Palette"]},
{"name":"flare.util.Property","size":1,"imports":["flare.util.IPredicate","flare.util.IValueProxy","flare.util.IEvaluable"]},
{"name":"flare.util.Shapes","size":1,"imports":["flare.util.Arrays"]},
{"name":"flare.util.Sort","size":1,"imports":["flare.util.Arrays","flare.util.Property"]},
{"name":"flare.util.Stats","size":1,"imports":["flare.util.Arrays","flare.util.Property"]},
{"name":"flare.util.Strings","size":1,"imports":["flare.util.Dates","flare.util.Property"]},
{"name":"flare.vis.axis.Axes","size":1,"imports":["flare.animate.Transitioner","flare.vis.Visualization"]},
{"name":"flare.vis.axis.Axis","size":1,"imports":["flare.animate.Transitioner","flare.scale.LinearScale","flare.util.Arrays","flare.scale.ScaleType","flare.util.Strings","flare.display.TextSprite","flare.scale.Scale","flare.util.Stats","flare.scale.IScaleMap","flare.vis.axis.AxisLabel","flare.vis.axis.AxisGridLine"]},
{"name":"flare.vis.axis.AxisGridLine","size":1,"imports":["flare.vis.axis.Axis","flare.display.LineSprite"]},
{"name":"flare.vis.axis.AxisLabel","size":1,"imports":["flare.vis.axis.Axis","flare.display.TextSprite"]},
{"name":"flare.vis.axis.CartesianAxes","size":1,"imports":["flare.animate.Transitioner","flare.display.RectSprite","flare.vis.axis.Axis","flare.display.TextSprite","flare.vis.axis.Axes","flare.vis.Visualization","flare.vis.axis.AxisGridLine"]},
{"name":"flare.vis.controls.AnchorControl","size":1,"imports":["flare.vis.controls.Control","flare.vis.Visualization","flare.vis.operator.layout.Layout"]},
{"name":"flare.vis.controls.ClickControl","size":1,"imports":["flare.vis.events.SelectionEvent","flare.vis.controls.Control"]},
{"name":"flare.vis.controls.Control","size":1,"imports":["flare.vis.controls.IControl","flare.util.Filter"]},
{"name":"flare.vis.controls.ControlList","size":1,"imports":["flare.vis.controls.IControl","flare.util.Arrays","flare.vis.Visualization","flare.vis.controls.Control"]},
{"name":"flare.vis.controls.DragControl","size":1,"imports":["flare.vis.controls.Control","flare.vis.data.DataSprite"]},
{"name":"flare.vis.controls.ExpandControl","size":1,"imports":["flare.animate.Transitioner","flare.vis.data.NodeSprite","flare.vis.controls.Control","flare.vis.Visualization"]},
{"name":"flare.vis.controls.HoverControl","size":1,"imports":["flare.vis.events.SelectionEvent","flare.vis.controls.Control"]},
{"name":"flare.vis.controls.IControl","size":1,"imports":["flare.vis.controls.Control"]},
{"name":"flare.vis.controls.PanZoomControl","size":1,"imports":["flare.util.Displays","flare.vis.controls.Control"]},
{"name":"flare.vis.controls.SelectionControl","size":1,"imports":["flare.vis.events.SelectionEvent","flare.vis.controls.Control"]},
{"name":"flare.vis.controls.TooltipControl","size":1,"imports":["flare.animate.Tween","flare.display.TextSprite","flare.vis.controls.Control","flare.vis.events.TooltipEvent"]},
{"name":"flare.vis.data.Data","size":1,"imports":["flare.vis.data.EdgeSprite","flare.vis.data.NodeSprite","flare.util.Arrays","flare.vis.data.DataSprite","flare.vis.data.Tree","flare.vis.events.DataEvent","flare.data.DataSet","flare.vis.data.TreeBuilder","flare.vis.data.DataList","flare.data.DataSchema","flare.util.Sort","flare.data.DataField","flare.util.Property"]},
{"name":"flare.vis.data.DataList","size":1,"imports":["flare.animate.Transitioner","flare.vis.data.NodeSprite","flare.util.Arrays","flare.util.math.DenseMatrix","flare.vis.data.DataSprite","flare.vis.data.EdgeSprite","flare.vis.events.DataEvent","flare.util.Stats","flare.util.math.IMatrix","flare.util.Sort","flare.util.Filter","flare.util.Property","flare.util.IEvaluable","flare.vis.data.Data"]},
{"name":"flare.vis.data.DataSprite","size":1,"imports":["flare.util.Colors","flare.vis.data.Data","flare.display.DirtySprite","flare.vis.data.render.IRenderer","flare.vis.data.render.ShapeRenderer"]},
{"name":"flare.vis.data.EdgeSprite","size":1,"imports":["flare.vis.data.render.EdgeRenderer","flare.vis.data.DataSprite","flare.vis.data.NodeSprite","flare.vis.data.render.ArrowType","flare.vis.data.Data"]},
{"name":"flare.vis.data.NodeSprite","size":1,"imports":["flare.animate.Transitioner","flare.util.Arrays","flare.vis.data.DataSprite","flare.vis.data.EdgeSprite","flare.vis.data.Tree","flare.util.Sort","flare.util.Filter","flare.util.IEvaluable","flare.vis.data.Data"]},
{"name":"flare.vis.data.render.ArrowType","size":1,"imports":[]},
{"name":"flare.vis.data.render.EdgeRenderer","size":1,"imports":["flare.vis.data.EdgeSprite","flare.vis.data.NodeSprite","flare.vis.data.DataSprite","flare.vis.data.render.IRenderer","flare.util.Shapes","flare.util.Geometry","flare.vis.data.render.ArrowType"]},
{"name":"flare.vis.data.render.IRenderer","size":1,"imports":["flare.vis.data.DataSprite"]},
{"name":"flare.vis.data.render.ShapeRenderer","size":1,"imports":["flare.util.Shapes","flare.vis.data.render.IRenderer","flare.vis.data.DataSprite"]},
{"name":"flare.vis.data.ScaleBinding","size":1,"imports":["flare.scale.TimeScale","flare.scale.ScaleType","flare.scale.LinearScale","flare.scale.LogScale","flare.scale.OrdinalScale","flare.scale.RootScale","flare.scale.Scale","flare.scale.QuantileScale","flare.util.Stats","flare.scale.QuantitativeScale","flare.vis.events.DataEvent","flare.vis.data.Data"]},
{"name":"flare.vis.data.Tree","size":1,"imports":["flare.vis.data.EdgeSprite","flare.vis.events.DataEvent","flare.vis.data.NodeSprite","flare.vis.data.Data"]},
{"name":"flare.vis.data.TreeBuilder","size":1,"imports":["flare.vis.data.EdgeSprite","flare.vis.data.NodeSprite","flare.vis.data.Tree","flare.util.heap.HeapNode","flare.util.heap.FibonacciHeap","flare.util.Property","flare.util.IEvaluable","flare.vis.data.Data"]},
{"name":"flare.vis.events.DataEvent","size":1,"imports":["flare.vis.data.EdgeSprite","flare.vis.data.NodeSprite","flare.vis.data.DataList","flare.vis.data.DataSprite"]},
{"name":"flare.vis.events.SelectionEvent","size":1,"imports":["flare.vis.events.DataEvent"]},
{"name":"flare.vis.events.TooltipEvent","size":1,"imports":["flare.vis.data.EdgeSprite","flare.vis.data.NodeSprite"]},
{"name":"flare.vis.events.VisualizationEvent","size":1,"imports":["flare.animate.Transitioner"]},
{"name":"flare.vis.legend.Legend","size":1,"imports":["flare.animate.Transitioner","flare.vis.data.ScaleBinding","flare.util.palette.SizePalette","flare.scale.ScaleType","flare.vis.legend.LegendItem","flare.display.RectSprite","flare.display.TextSprite","flare.scale.Scale","flare.vis.legend.LegendRange","flare.util.Displays","flare.util.Orientation","flare.util.palette.ShapePalette","flare.util.palette.Palette","flare.util.palette.ColorPalette"]},
{"name":"flare.vis.legend.LegendItem","size":1,"imports":["flare.util.Shapes","flare.display.TextSprite","flare.vis.legend.Legend","flare.display.RectSprite"]},
{"name":"flare.vis.legend.LegendRange","size":1,"imports":["flare.util.Colors","flare.vis.legend.Legend","flare.display.RectSprite","flare.display.TextSprite","flare.scale.Scale","flare.util.Stats","flare.scale.IScaleMap","flare.util.Orientation","flare.util.palette.ColorPalette"]},
{"name":"flare.vis.operator.distortion.BifocalDistortion","size":1,"imports":["flare.vis.operator.distortion.Distortion"]},
{"name":"flare.vis.operator.distortion.Distortion","size":1,"imports":["flare.animate.Transitioner","flare.vis.data.DataSprite","flare.vis.events.VisualizationEvent","flare.vis.axis.Axis","flare.vis.axis.CartesianAxes","flare.vis.operator.layout.Layout","flare.vis.data.Data"]},
{"name":"flare.vis.operator.distortion.FisheyeDistortion","size":1,"imports":["flare.vis.operator.distortion.Distortion"]},
{"name":"flare.vis.operator.encoder.ColorEncoder","size":1,"imports":["flare.animate.Transitioner","flare.scale.ScaleType","flare.vis.operator.encoder.Encoder","flare.util.palette.Palette","flare.util.palette.ColorPalette","flare.vis.data.Data"]},
{"name":"flare.vis.operator.encoder.Encoder","size":1,"imports":["flare.animate.Transitioner","flare.vis.data.DataSprite","flare.vis.operator.Operator","flare.vis.data.ScaleBinding","flare.util.palette.Palette","flare.util.Filter","flare.util.Property","flare.vis.data.Data"]},
{"name":"flare.vis.operator.encoder.PropertyEncoder","size":1,"imports":["flare.animate.Transitioner","flare.vis.data.DataList","flare.vis.data.Data","flare.vis.operator.encoder.Encoder","flare.util.Filter","flare.vis.operator.Operator"]},
{"name":"flare.vis.operator.encoder.ShapeEncoder","size":1,"imports":["flare.util.palette.Palette","flare.scale.ScaleType","flare.util.palette.ShapePalette","flare.vis.operator.encoder.Encoder","flare.vis.data.Data"]},
{"name":"flare.vis.operator.encoder.SizeEncoder","size":1,"imports":["flare.util.palette.Palette","flare.scale.ScaleType","flare.vis.operator.encoder.Encoder","flare.util.palette.SizePalette","flare.vis.data.Data"]},
{"name":"flare.vis.operator.filter.FisheyeTreeFilter","size":1,"imports":["flare.animate.Transitioner","flare.vis.data.NodeSprite","flare.vis.data.DataSprite","flare.vis.data.EdgeSprite","flare.vis.data.Tree","flare.vis.operator.Operator","flare.vis.data.Data"]},
{"name":"flare.vis.operator.filter.GraphDistanceFilter","size":1,"imports":["flare.animate.Transitioner","flare.vis.data.NodeSprite","flare.vis.operator.Operator","flare.vis.data.DataSprite","flare.vis.data.EdgeSprite"]},
{"name":"flare.vis.operator.filter.VisibilityFilter","size":1,"imports":["flare.vis.operator.Operator","flare.animate.Transitioner","flare.util.Filter","flare.vis.data.DataSprite","flare.vis.data.Data"]},
{"name":"flare.vis.operator.IOperator","size":1,"imports":["flare.animate.Transitioner","flare.vis.Visualization","flare.vis.operator.Operator"]},
{"name":"flare.vis.operator.label.Labeler","size":1,"imports":["flare.animate.Transitioner","flare.vis.data.DataSprite","flare.display.TextSprite","flare.vis.operator.Operator","flare.util.Shapes","flare.util.Filter","flare.util.Property","flare.util.IEvaluable","flare.vis.data.Data"]},
{"name":"flare.vis.operator.label.RadialLabeler","size":1,"imports":["flare.vis.operator.label.Labeler","flare.util.Shapes","flare.display.TextSprite","flare.vis.data.DataSprite","flare.vis.data.Data"]},
{"name":"flare.vis.operator.label.StackedAreaLabeler","size":1,"imports":["flare.vis.operator.label.Labeler","flare.display.TextSprite","flare.vis.data.DataSprite","flare.vis.data.Data"]},
{"name":"flare.vis.operator.layout.AxisLayout","size":1,"imports":["flare.scale.ScaleType","flare.vis.data.DataSprite","flare.vis.axis.CartesianAxes","flare.vis.data.ScaleBinding","flare.util.Property","flare.vis.operator.layout.Layout","flare.vis.data.Data"]},
{"name":"flare.vis.operator.layout.BundledEdgeRouter","size":1,"imports":["flare.animate.Transitioner","flare.vis.data.NodeSprite","flare.util.Arrays","flare.vis.data.DataSprite","flare.vis.data.EdgeSprite","flare.util.Shapes","flare.vis.operator.layout.Layout","flare.vis.operator.Operator"]},
{"name":"flare.vis.operator.layout.CircleLayout","size":1,"imports":["flare.vis.data.NodeSprite","flare.vis.data.DataList","flare.vis.data.ScaleBinding","flare.util.Property","flare.vis.operator.layout.Layout","flare.vis.data.Data"]},
{"name":"flare.vis.operator.layout.CirclePackingLayout","size":1,"imports":["flare.vis.data.NodeSprite","flare.vis.data.render.ShapeRenderer","flare.util.Shapes","flare.util.Sort","flare.vis.operator.layout.Layout","flare.vis.data.Data"]},
{"name":"flare.vis.operator.layout.DendrogramLayout","size":1,"imports":["flare.util.Property","flare.vis.data.NodeSprite","flare.util.Orientation","flare.vis.operator.layout.Layout","flare.vis.data.EdgeSprite"]},
{"name":"flare.vis.operator.layout.ForceDirectedLayout","size":1,"imports":["flare.physics.Simulation","flare.animate.Transitioner","flare.vis.data.NodeSprite","flare.vis.data.DataSprite","flare.physics.Particle","flare.physics.Spring","flare.vis.operator.layout.Layout","flare.vis.data.EdgeSprite","flare.vis.data.Data"]},
{"name":"flare.vis.operator.layout.IcicleTreeLayout","size":1,"imports":["flare.vis.data.NodeSprite","flare.util.Orientation","flare.vis.operator.layout.Layout"]},
{"name":"flare.vis.operator.layout.IndentedTreeLayout","size":1,"imports":["flare.animate.Transitioner","flare.vis.data.NodeSprite","flare.util.Arrays","flare.vis.operator.layout.Layout","flare.vis.data.EdgeSprite"]},
{"name":"flare.vis.operator.layout.Layout","size":1,"imports":["flare.animate.Transitioner","flare.vis.data.NodeSprite","flare.vis.data.DataList","flare.vis.data.DataSprite","flare.vis.data.EdgeSprite","flare.vis.Visualization","flare.vis.axis.CartesianAxes","flare.vis.axis.Axes","flare.animate.TransitionEvent","flare.vis.operator.Operator"]},
{"name":"flare.vis.operator.layout.NodeLinkTreeLayout","size":1,"imports":["flare.vis.data.NodeSprite","flare.util.Arrays","flare.util.Orientation","flare.vis.operator.layout.Layout"]},
{"name":"flare.vis.operator.layout.PieLayout","size":1,"imports":["flare.vis.data.DataList","flare.vis.data.DataSprite","flare.util.Shapes","flare.util.Property","flare.vis.operator.layout.Layout","flare.vis.data.Data"]},
{"name":"flare.vis.operator.layout.RadialTreeLayout","size":1,"imports":["flare.vis.data.NodeSprite","flare.util.Arrays","flare.vis.operator.layout.Layout"]},
{"name":"flare.vis.operator.layout.RandomLayout","size":1,"imports":["flare.vis.operator.layout.Layout","flare.vis.data.DataSprite","flare.vis.data.Data"]},
{"name":"flare.vis.operator.layout.StackedAreaLayout","size":1,"imports":["flare.scale.TimeScale","flare.scale.LinearScale","flare.util.Arrays","flare.scale.OrdinalScale","flare.vis.data.NodeSprite","flare.scale.Scale","flare.vis.axis.CartesianAxes","flare.util.Stats","flare.util.Orientation","flare.scale.QuantitativeScale","flare.util.Maths","flare.vis.operator.layout.Layout"]},
{"name":"flare.vis.operator.layout.TreeMapLayout","size":1,"imports":["flare.animate.Transitioner","flare.vis.data.NodeSprite","flare.util.Property","flare.vis.operator.layout.Layout"]},
{"name":"flare.vis.operator.Operator","size":1,"imports":["flare.animate.Transitioner","flare.vis.operator.IOperator","flare.util.Property","flare.util.IEvaluable","flare.vis.Visualization"]},
{"name":"flare.vis.operator.OperatorList","size":1,"imports":["flare.animate.Transitioner","flare.util.Arrays","flare.vis.operator.IOperator","flare.vis.Visualization","flare.vis.operator.Operator"]},
{"name":"flare.vis.operator.OperatorSequence","size":1,"imports":["flare.animate.Transitioner","flare.util.Arrays","flare.vis.operator.IOperator","flare.vis.operator.OperatorList","flare.animate.FunctionSequence","flare.vis.operator.Operator"]},
{"name":"flare.vis.operator.OperatorSwitch","size":1,"imports":["flare.animate.Transitioner","flare.vis.operator.OperatorList","flare.vis.operator.IOperator","flare.vis.operator.Operator"]},
{"name":"flare.vis.operator.SortOperator","size":1,"imports":["flare.vis.operator.Operator","flare.animate.Transitioner","flare.util.Arrays","flare.vis.data.Data"]},
{"name":"flare.vis.Visualization","size":1,"imports":["flare.animate.Transitioner","flare.vis.operator.IOperator","flare.animate.Scheduler","flare.vis.events.VisualizationEvent","flare.vis.data.Tree","flare.vis.events.DataEvent","flare.vis.axis.Axes","flare.vis.axis.CartesianAxes","flare.util.Displays","flare.vis.operator.OperatorList","flare.vis.controls.ControlList","flare.animate.ISchedulable","flare.vis.data.Data"]}]

















var diameter = 720,
    radius = diameter / 2,
    innerRadius = radius - 120;

var cluster = d3.cluster()
    .size([360, innerRadius]);

var line = d3.radialLine()
    .curve(d3.curveBundle.beta(0.85))
    .radius(function(d) { return d.y; })
    .angle(function(d) { return d.x / 180 * Math.PI; });

var svg = d3.select("#my_dataviz").append("svg")
    .attr("width", diameter)
    .attr("height", diameter)
  .append("g")
    .attr("transform", "translate(" + radius + "," + radius + ")");

var link = svg.append("g").selectAll(".link"),
    node = svg.append("g").selectAll(".node");


  console.log(classes)

  var root = packageHierarchy(classes)
      .sum(function(d) { return d.size; });

  cluster(root);

  link = link
    .data(packageImports(root.leaves()))
    .enter().append("path")
      .each(function(d) { d.source = d[0], d.target = d[d.length - 1]; })
      .attr("class", "link")
      .attr("d", line);

  node = node
    .data(root.leaves())
    .enter().append("text")
      .attr("class", "node")
      .attr("dy", "0.31em")
      .attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + (d.y + 8) + ",0)" + (d.x < 180 ? "" : "rotate(180)"); })
      .attr("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
      .text(function(d) { return d.data.key; });


// Lazily construct the package hierarchy from class names.
function packageHierarchy(classes) {
  var map = {};

  function find(name, data) {
    var node = map[name], i;
    if (!node) {
      node = map[name] = data || {name: name, children: []};
      if (name.length) {
        node.parent = find(name.substring(0, i = name.lastIndexOf(".")));
        node.parent.children.push(node);
        node.key = name.substring(i + 1);
      }
    }
    return node;
  }

  classes.forEach(function(d) {
    find(d.name, d);
  });

  return d3.hierarchy(map[""]);
}

// Return a list of imports for the given array of nodes.
function packageImports(nodes) {
  var map = {},
      imports = [];

  // Compute a map from name to node.
  nodes.forEach(function(d) {
    map[d.data.name] = d;
  });

  // For each import, construct a link from the source to target node.
  nodes.forEach(function(d) {
    if (d.data.imports) d.data.imports.forEach(function(i) {
      imports.push(map[d.data.name].path(map[i]));
    });
  });

  return imports;
}